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
      <div class="container">
        <div class="img">
          <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" />
        </div>
        <div class="login-content">
          <form action="index.html" onSubmit={this.handleFormSubmit}>
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" />
              <h2 class="title">SIGN UP</h2>
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <input type="text" class="input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                </div>
              </div>
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <input type="password" class="input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                </div>
              </div>
              <a href="/login">Already have an account? Log In!!</a>
              <input type="submit" class="btn" type="submit" value="SIGN UP" />
            </form>
            </div>
          </div>
    );
  }
}

export default withAuth(Signup);


