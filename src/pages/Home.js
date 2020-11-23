import React, { Component } from 'react'
import Carrousel from '../components/Carrousel';
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import service from '../api/service';

class Home extends Component {
	state = {
		movies: [],
		user: [],
		filterMovies: []
	}

	getDBmovies = async () => {
		const res = await service.getDBmovies();
		this.setState({ movies: res })
	}

	componentDidMount = () => {
		this.getDBmovies();
	}

	clearSearch = ()=>{
		this.setState({ filterMovies: [] })
	}

	

	filterSearch = async (searchTerm) => {
		// convertimos la palabra buscada en minúsculas
		const searchedTerm = searchTerm.toLowerCase();

		// filtramos una copia de la lista original de comidas para devolver únicamente las comidas cuyo nombre (en minúsculas también) corresponden al término de búsqueda
		const filteredList = await service.searchMovie(searchedTerm)

		console.log('searchTermmmmmmm', searchTerm)
		if(searchTerm){
			this.setState({ filterMovies: filteredList})
		}
		// actualizamos la lista de comidas filtradas (la que vamos a mostrar en el render())
		// this.setState({ filterMovies: filteredList })
		
	}

	render() {
		console.log('STATE MOVIES DE HOME', this.state.movies) 
		console.log('STATE FILTERMOVIES DE HOME', this.state.filterMovies)
		return (
			<div className="container2">
				<SearchBar filterSearch={this.filterSearch} clearSearch={this.clearSearch}/>
				{this.state.filterMovies && this.state.filterMovies.map((oneMovie, index) => {
					return <SearchResult key={index} theMovie={oneMovie} />
				})}
				<Carrousel />
			</div>
		)
	}
}

export default Home;