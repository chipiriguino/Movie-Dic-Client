import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE
import {Button} from 'react-bootstrap';


class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	//	<-- UPDATE HERE
    return (
      <header class="header">
  <a href="" class="logo">CSS Nav</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  {
    isLoggedin ?
    (<>
  <ul class="menu">
    
  
  
    <li><a href="#work">Our Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#contact" onClick={logout}>Contact</a></li>
  
  </ul>
  </>)
    : 
    (<>
    <ul class="menu">
    <li><a href="#work">Our Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#contact" onClick={logout}>Contact</a></li>
    
    </ul>
    </>)
    }

</header>
      
      // <nav className="navbar">
      //       <Link to={'/'} id='home-btn'>
      //     <img className="logonav" src="logos/cola.png" width="40" height="40"></img>
      //   </Link>
      //   {
      //     isLoggedin ?
      //     (<>
      //       <p className="navbar-user">username: {user.username}</p>	
      //       {/* <button className="navbar-button" onClick={logout}>Logout</button> */}
      //       <Button variant="warning" onClick={logout}>Logout</Button>
      //       <Link to="/movies"> All Movies</Link>
      //       <Link to="/random"> Random</Link>
      //       <Link to="/private"> My profile</Link>
      //       <Link to="/popular"> popular</Link>
      //     </>) 
      //    : 
      //     (<>
      //       <Link to="/login">
      //         <button className="navbar-button">Login</button>
      //       </Link>
      //       <br />
      //       <Link to="/signup">
      //         <button className="navbar-button">Sign Up</button>
      //       </Link>
      
      //     </>)
      //   }
      // </nav>
    );
  }
}

export default withAuth(Navbar);



