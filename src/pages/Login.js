import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";


class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });			//	<-- UPDATE HERE
    this.props.history.push("/");	
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="container">
        <div className="img">
          <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" alt="Profile"/>
        </div>
        <div className="login-content">
          <form action="index.html" onSubmit={this.handleFormSubmit}>
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="Profile"/>
              <h2 className="title">LOG IN</h2>
              <div className="input-div one">
                <div className="i">
                </div>
                <div className="div">
                  <input type="text" className="input" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                </div>
                <div className="div">
                  <input type="password" className="input" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                </div>
              </div>
              <a href="/signup">You don't have an account? Sign In!!</a>
              <input type="submit" className="btn" value="Log in" />
            </form>
            </div>
          </div>
    );
  }
}

export default withAuth(Login);
