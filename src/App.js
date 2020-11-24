import React, { Component } from "react";
import "./App.css";
import { Switch, Route} from "react-router-dom";
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
import UpdateMovie from "./components/UpdateMovie";
import DetailsMovie from "./components/DetailsMovie";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";


class App extends Component {
  state = {
    movies: [],
    user: [],
    filterMovies : []
  }

  paginaAnterior = () => {
    console.log('Anterior....')
}

  paginaSiguiente = () => {
      console.log('Siguiente....')
  }

  render() {
    console.log('PELIS APP.JS STATE', this.state.movies)
    return (
      // Envolvemos los componentes con AuthProvider
      <div className="appjs">
      <AuthProvider>
       
        <>
          <Navbar />
          {/* <SearchBar filterSearch={(e)=> this.filterSearch(e)}/>
          {this.state.filterMovies.map((oneMovie, index)=> {
          return <SearchResult key={index} theMovie={oneMovie} />
        })} */}
        <Switch>
          <AnonRoute path="/signup" component={Signup} /> {/* UPDATE <Route> to <AnonRoute> */}
          <AnonRoute path="/login" component={Login} />	{/* UPDATE <Route> to <AnonRoute> */}
          <PrivateRoute 
            user={this.props.user}
          path="/popular" component={MostPopular} />
          <PrivateRoute path="/create" component={AddMovie} />
          <PrivateRoute path="/random" component={Random} />
          <PrivateRoute path="/upload/:id" component={UpdateMovie} />
          <PrivateRoute 
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
            path="/movies" component={AllMovies}
            />
          <PrivateRoute path="/details/:id" component={DetailsMovie} />
          <PrivateRoute 
            path="/private"
            // movies={this.state.movies}
            component={Private} 
            />
          <Route path="/" component={Home} />
        </Switch>
        </>
        
      </AuthProvider>
      </div>
      // Envolvemos los componentes con AuthProvider
    );
  }
}

export default App;