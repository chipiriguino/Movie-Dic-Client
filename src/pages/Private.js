import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";	
import { Link } from "react-router-dom";

class Private extends Component {
  render(props) {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <img src={this.props.user.image} alt="imagen" width="250" height="250"/>
        <p>Again around here <strong>{this.props.user.username} </strong>we are glad to see you again, you can now search our sea of ​​movies. Don't forget the wellies. </p>
        <article className="btn-myrpfile">
        <button className="boton azul">Edit profile</button>
        <button className="boton azul">Fav films</button>
        {/* <button><Link to="/create">Add Movie!</Link></button> */}
        </article>
      </div>
    );
  }
}

export default withAuth(Private);
