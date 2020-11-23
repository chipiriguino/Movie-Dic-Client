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

  getAllMovies = async () => {
    const res = await service.getAllMovies();
    this.setState({movies: res})
  }

  componentDidMount = () => {
    this.getAllMovies();
  }

  filterSearch = (value) => {
    const copyFood = [...this.state.movies]
    let filtrado = copyFood.filter(data=>{
      let title = data.movie_title.toLowerCase().trim();
      let valueLower = value.toLowerCase().trim();
      return title.includes(valueLower)

    })
    this.setState({
      filterMovies: filtrado
    })
  }

  //FILTER SERACH NUEVO!!!!
  // filterSearch = (searchTerm) => {
  //   // convertimos la palabra buscada en minúsculas
  //   const searchedTerm = searchTerm.toLowerCase();

  //   // filtramos una copia de la lista original de comidas para devolver únicamente las comidas cuyo nombre (en minúsculas también) corresponden al término de búsqueda
  //   const filteredList = [...this.state.movies].filter( movieObj => {
  //     return movieObj.name.toLowerCase().includes(searchedTerm);
  //   })

  //   // actualizamos la lista de comidas filtradas (la que vamos a mostrar en el render())
  //   this.setState({filterMovies: filteredList})
  // }

  render() {
    return (
      // Envolvemos los componentes con AuthProvider
      <AuthProvider>
       
        <>
          <Navbar />
          <SearchBar filterSearch={(e)=> this.filterSearch(e)}/>
          {this.state.filterMovies.map((oneMovie, index)=> {
          return <SearchResult key={index} theMovie={oneMovie} />
        })}
        <Switch>
          <AnonRoute path="/signup" component={Signup} /> {/* UPDATE <Route> to <AnonRoute> */}
          <AnonRoute path="/login" component={Login} />	{/* UPDATE <Route> to <AnonRoute> */}
          <PrivateRoute 
            user={this.props.user}
          path="/popular" component={MostPopular} />
          <PrivateRoute path="/create" component={AddMovie} />
          <PrivateRoute path="/random" component={Random} />
          <PrivateRoute path="/upload/:id" component={UpdateMovie} />
          <PrivateRoute path="/movies" component={AllMovies} />
          <PrivateRoute path="/details/:id" component={DetailsMovie} />
          <PrivateRoute 
            path="/private"
            movies={this.state.movies}
            component={Private} 
            />
          <Route path="/" component={Home} />
        </Switch>
        </>
        
      </AuthProvider>
      // Envolvemos los componentes con AuthProvider
    );
  }
}

export default App;