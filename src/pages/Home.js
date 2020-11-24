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

	filterSearch = async (searchTerm) => {
		const searchedTerm = searchTerm.toLowerCase();
		const filteredList = await service.searchMovie(searchedTerm)
		
		if(searchTerm){
			this.setState({ filterMovies: filteredList})
		}
	}

	clearSearch = ()=>{
		this.setState({ filterMovies: [] })
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