import React, { Component } from 'react'
import Carrousel from '../components/Carrousel';
import Carrousel2 from '../components/Carrousel2';
import Carrousel3 from '../components/Carrousel3';
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
					<h1>WELCOME!</h1>
					<h3>The best movies in the world are now within your reach!</h3>
					<SearchBar filterSearch={this.filterSearch} clearSearch={this.clearSearch}/>
				</div>
				{this.state.filterMovies && this.state.filterMovies.map((oneMovie, index) => {
					return <SearchResult key={index} theMovie={oneMovie} />
				})}
				<h1 className="home-txt-carrousel">Most rated:</h1>
				<Carrousel />
				<h1 className="home-txt-carrousel">Most popular:</h1>
				<Carrousel2 />
				<h1 className="home-txt-carrousel">Most voted:</h1>
				<Carrousel3 />
			</div>
		)
	}
}

export default Home;