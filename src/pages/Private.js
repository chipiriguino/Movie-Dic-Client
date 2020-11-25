import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import service from '../api/service';
import Favorites from '../components/Favorites';
import Button from 'react-bootstrap/Button';


class Private extends Component {
  state = {
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
      <div className="container2">
        <div className="container3">
          <div className="hola"></div>
          <h1 className="h1-align">Welcome {this.props.user.username}</h1>
          <div className="img-align-profile" > <img src={this.props.user.image} style={{ 'borderRadius': '120px' }} alt="imagen" width="250" height="250" /></div>
          <p className="p-align">Again around here <strong>{this.props.user.username} </strong>we are glad to see you again, you can now search our sea of ​​movies. Don't forget the wellies. </p>
          <article className="btn-myrpfile">
            <div className="align-btn-profile">
              <a href="/create"><Button variant="primary" size="sm" active>Add movie</Button></a>
              <a href="/random"><Button variant="primary" size="sm" active>Random movie</Button></a>
            </div>
          </article>
        </div>
        <div className="container3">
        <h1 className="home-txt-carrousel">Your favourites: </h1>
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
