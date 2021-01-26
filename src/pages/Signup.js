import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";	

class Signup extends Component {
  state = {
    username: "",
    password: "",
    mail: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, mail } = this.state;
    this.props.signup({ username, password, mail });
    this.props.history.push("/");			
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, mail } = this.state;
    console.log(this.state, "Estado SignUp")
    return (
      <div className="container">
        <div className="img">
          <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" alt="Signup"/>
        </div>
        <div className="login-content">
          <form action="index.html" onSubmit={this.handleFormSubmit}>
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="Signup"/>
              <h2 className="title">SIGN UP</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input type="text" className="input"  name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                </div>
              </div>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input type="text" className="input"  name="mail" value={mail} onChange={this.handleChange} placeholder="Enter your Mail" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input type="password" className="input" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                </div>
              </div>
              <a href="/login">Already have an account? Log In!!</a>
              <input type="submit" className="btn" value="SIGN UP" />
            </form>
            </div>
          </div>
    );
  }
}

export default withAuth(Signup);


