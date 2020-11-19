import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });		
    this.props.login({ username, password });			//	<-- UPDATE HERE
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div className="logo-inicio"><img src="/Logos/solotitulo.png" height="230" width="250"></img>
        <h1 className="loginh1">Login</h1>
        
        <form onSubmit={this.handleFormSubmit}>
          
          <label>User:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/><br></br>

          <label>Pass:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} /><br></br>

          <input className="botton-login" type="submit" value="Login" />
          
        </form>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);	
