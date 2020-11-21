import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE
import { Button } from 'react-bootstrap'

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	//	<-- UPDATE HERE
    return (
      <header class="header">
        <a href="/" class="logo">Home</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a href="/popular">Most Popular</a></li>
          <li><a href="/movies">All Movies</a></li>
          <li><a href="/private">My profile</a></li>
          <li><a href="/random">Random</a></li>
          {
            isLoggedin ?
              (<>
                <li><a className="navbar-user">Welcome, {user.username}</a></li>
                <li><a className="navbar-button" onClick={logout}>Logout</a></li>
              </>) :
              (
                <>
                <li><a href="/login">LogIn</a></li>
                <li><a href="/signup">Sign Up</a></li>
                </>)
          }
        </ul>
      </header>
    );
  }
}

export default withAuth(Navbar);


{/* <nav className="navbar">
            <Link to="/" id='home-btn'>
          <img className="logonav" src="logos/cola.png" width="40" height="40" alt="phoooto"></img>
        </Link>
        {
          isLoggedin ?
          (<>
            <p className="navbar-user">username: {user.username}</p>	
            <button className="navbar-button" onClick={logout}>Logout</button>
<Button variant="warning" onClick={logout}>Logout</Button>
          </>) 
         :
(<>
  <Link to="/login">
    <button className="navbar-button">Login</button>
  </Link>
  <br />
  <Link to="/signup">
    <button className="navbar-button">Sign Up</button>
  </Link>

</>)
        }
      </nav > */}






