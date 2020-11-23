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
		return (
			<div className="container2">
				<div className="home-section">
					<h1>Bienvenidos!</h1>
					<h3>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
					<SearchBar filterSearch={this.filterSearch} clearSearch={this.clearSearch}/>
				</div>
				{this.state.filterMovies && this.state.filterMovies.map((oneMovie, index) => {
					return <SearchResult key={index} theMovie={oneMovie} />
				})}
				<Carrousel />
			</div>
		)
	}
}

export default Home;