import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MostPopular from "./components/MostPopular";
import Random from "./components/Random";
import AllMovies from "./components/AllMovies";
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";
import DetailsMovie from "./components/DetailsMovie";
import Credits from "./components/Credits";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    movies: [],
    user: [],
    filterMovies: [],
  }


  render() {
    return (
      <div className="appjs">
        <AuthProvider>
          <>
            <Navbar />
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />	
              <PrivateRoute
                user={this.props.user}
                path="/popular" component={MostPopular} />
              <PrivateRoute path="/credits" component={Credits} />
              <PrivateRoute path="/create" component={AddMovie} />
              <PrivateRoute path="/random" component={Random} />
              <PrivateRoute path="/upload/:id" component={UpdateMovie} />
              <PrivateRoute
                user={this.props.user}
                path='/allmovies'component={() => <AllMovies/>}
              />
              <PrivateRoute path="/details/:id" component={DetailsMovie} />
              <PrivateRoute path="/private" component={Private} />
              <Route path="/" component={Home}
              />
            </Switch>
          </>
        </AuthProvider>
        <Footer/>
      </div>
    );
  }
}

export default App;