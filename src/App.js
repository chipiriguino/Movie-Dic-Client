import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllMovies from './components/AllMovies';
import AddMovie from './components/AddMovie';
import Random from './components/Random';
import UpdateMovie from './components/UpdateMovie';
import DetailsMovie from './components/DetailsMovie'; 
import Private from '../src/pages/Private';
import UpdateProfile from './components/UpdateProfile';
import Footer from './components/Footer'
import MostPopular from './components/MostPopular';
import MovieTmdb from "./components/MovieTmdb";


class App extends Component {
  state = {
    movies: [],
    user: [],
    filterMovies: [],
  }

  render() {
    return (
      <>
        <AuthProvider>
          <>
            <Navbar />
            <Switch>
              <Route exacth path="/create" component={AddMovie} />
              <Route exact path="/random" component={Random} />
              <Route exact path="/upload/:id" component={UpdateMovie} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/popular" component={MostPopular} />
              <Route exact path="/api/tmdb" component={MovieTmdb} />
              <Route
                user={this.props.user}
                exact path='/allmovies'component={() => <AllMovies/>}
              />
              <PrivateRoute exact path="/details/:id" component={DetailsMovie} />
              <PrivateRoute exact path="/private" component={Private} />
              <PrivateRoute exact path="/update/:id" component={UpdateProfile} />
              <Route exact path="/" component={Home}
              />
            </Switch>
          </>
        </AuthProvider>
        <Footer/>
      </>
    );
  }
}

export default App;