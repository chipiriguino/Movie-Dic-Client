import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";	
import { Link } from "react-router-dom";
import service from '../api/service';
import Favorites from '../components/Favorites';

class Private extends Component {
  state= {
    movies: [],
    user: []
  }
  getProfileUser = async () => {
    let res = await service.getProfileUser(this.props.user._id);
    this.setState({ user: this.props.user })
  }

  getAllMovies = async () => {
    let res = await service.getAllMovies();
    this.setState({ movies: res })
    console.log('MOVIES PRIVATE JS', this.state.movies)
}

  componentDidMount = () => {
    this.getProfileUser();
    this.getAllMovies();
  }

  render() {

    return (
      <div>
          <div>
          <h1 className="h1-align">Welcome {this.props.user.username}</h1>
         <div className="img-align-profile" > <img src={this.props.user.image} alt="imagen" width="250" height="250"/></div>
          <p className="p-align">Again around here <strong>{this.props.user.username} </strong>we are glad to see you again, you can now search our sea of ​​movies. Don't forget the wellies. </p>
          <article className="btn-myrpfile">
            <div className="align-btn-profile">
            <a href="/create"><button className="boton azul">Add movie</button></a>
          <a href="/random"><button className="boton azul">Random</button></a>
          {/* <button><Link to="/create">Add Movie!</Link></button> */}
          </div>
          </article>
          </div>
          <div>
            <Favorites 
              user={this.props.user}
              // movies={this.state.movies}
            />
            
          </div>
      </div>
    );
  }
}

export default withAuth(Private);
