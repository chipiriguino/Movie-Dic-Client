import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link} from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import service from './api/service';
import Home from './pages/Home';
import MostPopular from "./components/MostPopular";
import Random from "./components/Random";
import AllMovies from "./components/AllMovies";
import AddMovie from "./components/AddMovie";
import DetailsMovie from "./components/DetailsMovie";


class App extends Component {
  state = {
    movies: [],
  }

  getMovies = async () => {
    const res = await service.getMovies();
    console.log(res);
    this.setState({movies: res})
  }

  componentDidMount = () => {
    this.getMovies();
  }

  render() {
    return (
      // Envolvemos los componentes con AuthProvider
      <AuthProvider>
       
        <div className="container">
          <Navbar />
        <Switch>
          <AnonRoute path="/signup" component={Signup} /> {/* UPDATE <Route> to <AnonRoute> */}
          <AnonRoute path="/login" component={Login} />	{/* UPDATE <Route> to <AnonRoute> */}
          {/* <AnonRoute path="/" component={Home} /> UPDATE <Route> to <AnonRoute> */}
          <PrivateRoute path="/popular" component={MostPopular} />
          <PrivateRoute path="/create" component={AddMovie} />
          <PrivateRoute path="/random" component={Random} />
          <PrivateRoute path="/movies" component={AllMovies} />
          <PrivateRoute path="/details/:id" component={DetailsMovie} />
          <PrivateRoute path="/private" component={Private} />
        </Switch>
        </div>
        
      </AuthProvider>
      // Envolvemos los componentes con AuthProvider
    );
  }
}

export default App;