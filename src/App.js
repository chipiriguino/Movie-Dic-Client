import React, { Component } from "react";
import "./App.css";
import { Switch, Link } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import service from './api/service'
import MostPopular from "./components/MostPopular";

class App extends Component {
  state = {
    movies: []
  }

  getMostPopular = async () => {
    let res = await service.getMostPopular();
    console.log('FUNCION GETMOSTPOPULAR APPJS', res.results);
    this.setState({movies: res})
  }

  componentDidMount = () => {
    this.getMostPopular();
  }

  render() {
    return (
      // Envolvemos los componentes con AuthProvider
      <AuthProvider>
       
        <div className="container">
          <Navbar />
          <h1>Basic React Authentication</h1>
          
        <Switch>
          <AnonRoute path="/signup" component={Signup} /> {/* UPDATE <Route> to <AnonRoute> */}
          <AnonRoute path="/login" component={Login} />	{/* UPDATE <Route> to <AnonRoute> */}
          <PrivateRoute path="/private" component={Private} />
          <AnonRoute path="/top-rated" component={MostPopular} />
          <Link to="/movies/top-rated">Top-Rated</Link>
        </Switch>
        </div>
        
      </AuthProvider>
      // Envolvemos los componentes con AuthProvider
    );
  }
}

export default App;