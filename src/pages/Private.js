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
          <h1>Welcome {this.props.user.username}</h1>
          <img src={this.props.user.image} alt="imagen" width="250" height="250"/>
          <p>Again around here <strong>{this.props.user.username} </strong>we are glad to see you again, you can now search our sea of ​​movies. Don't forget the wellies. </p>
          <article className="btn-myrpfile">
          <button>Edit profile</button>
          <button><Link to="/random">Random</Link></button>
          <button>Fav films</button>
          {/* <button><Link to="/create">Add Movie!</Link></button> */}
          </article>
          </div>
          <div>
            <Favorites 
              user={this.props.user}
              movies={this.state.movies}
            />
            
          </div>
      </div>
    );
  }
}

export default withAuth(Private);
