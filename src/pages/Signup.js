import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";	

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });			
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="body2">
        
        
      <form className="form-signin" onSubmit={this.handleFormSubmit}>
    <p className="text-center">
      <img src="http://pngimg.com/uploads/whale/whale_PNG19238.png" style={{ width:"70%"}} />
    </p>
    <div className="input-group-login sombreado-input">
      <div className="input-group-prepend-login">
        <span className="input-group-text fondo-icon">
          
        </span>
      </div>
      <input className="border-0-login form-control-login input-border-none" type="text" name="username" value={username} onChange={this.handleChange} placeholder="User"
        aria-label="Username"/>
    </div>

    <br />
    <div className="input-group-login sombreado-input">
      <div className="input-group-prepend-login">
        <span className="input-group-text fondo-icon">
        </span>
      </div>
      <input  className="border-0-login form-control-login input-border-none" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"
        aria-label="Username" />
    </div>
    <p className="text-center">
    <input className="button-signup fondo-color-signup" type="submit" value="Sign up" className="button-signup fondo-color-signup" />
  
    </p>
    <p className="text-center"></p>
    <p className="text-center"></p>
    <div id="social">
            <a class="facebookBtn smGlobalBtn" href="#" ></a>
            <a class="twitterBtn smGlobalBtn" href="#" ></a>
            <a class="googleplusBtn smGlobalBtn" href="#" ></a>
            <a class="pinterestBtn smGlobalBtn" href="#" ></a>

          </div>

  </form>
      </div>
    );
  }
}

export default withAuth(Signup);


