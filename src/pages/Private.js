import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";	
import { Link } from "react-router-dom";
import service from '../api/service';
import Favorites from '../components/Favorites';

class Private extends Component {
  state= {
    user: []
  }
  getProfileUser = async () => {
    let res = await service.getProfileUser(this.props.user._id);
    this.setState({ movie: res })
  }

  componentDidMount = () => {
    this.getProfileUser();
  }

  render(props) {
    console.log('GET FAVORITES ARRAY RENDEEEERRRRRR', this.props.user)

    return (
      <div>
          <div>
          <h1>Welcome {this.props.user.username}</h1>
          <img src={this.props.user.image} alt="imagen"/>
          <p>Again around here <strong>{this.props.user.username} </strong>we are glad to see you again, you can now search our sea of ​​movies. Don't forget the wellies. </p>
          <article className="btn-myrpfile">
          <button>Edit profile</button>
          <button><Link to="/random">Random</Link></button>
          <button>Fav films</button>
          <button><Link to="/create">Add Movie!</Link></button>
          </article>
          </div>
          <div>
            <Favorites 
              user={this.state.user}
            />
            
          </div>
      </div>
    );
  }
}

export default withAuth(Private);
