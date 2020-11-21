import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE
import {Button} from 'react-bootstrap'

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	//	<-- UPDATE HERE
    return (
      <nav className="navbar">
            <Link to={'/'} id='home-btn'>
          <img className="logonav" src="logos/cola.png" width="40" height="40" alt="phoooto"></img>
        </Link>
        {
          isLoggedin ?
          (<>
            <p className="navbar-user">username: {user.username}</p>	
            {/* <button className="navbar-button" onClick={logout}>Logout</button> */}
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
      </nav>
    );
  }
}

export default withAuth(Navbar);






