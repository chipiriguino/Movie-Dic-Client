import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE
import {Button} from 'react-bootstrap';





// class Navbar extends Component {
//   render(){
//   return (
//     <div>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="#home">Movie Dick</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="/login">login</Nav.Link>
//       <Nav.Link href="/signup">sign up</Nav.Link>
//       <NavDropdown title="Categorías" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">more populars</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">more rated</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">random</NavDropdown.Item>
//         <NavDropdown.Divider />
//       </NavDropdown>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//     </div>
//   );
//   };
// };

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	//	<-- UPDATE HERE
    return (
      
      <nav className="navbar">
            <Link to={'/'} id='home-btn'>
          <img className="logonav" src="logos/cola.png" width="40" height="40"></img>
        </Link>
        {
          isLoggedin ?
          (<>
            <p className="navbar-user">username: {user.username}</p>	
            {/* <button className="navbar-button" onClick={logout}>Logout</button> */}
            <Button variant="warning" onClick={logout}>Logout</Button>
            <Link to="/movies"> All Movies</Link>
            <Link to="/random"> Random</Link>
            <Link to="/private"> My profile</Link>
            <Link to="/popular"> popular</Link>
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



