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
					<h2>The best movies in the world are now within your reach!</h2>
					<SearchBar filterSearch={this.filterSearch} clearSearch={this.clearSearch}/>
				</div>
				{this.state.filterMovies && this.state.filterMovies.map((oneMovie, index) => {
					return <SearchResult key={index} theMovie={oneMovie} />
				})}
				<Carrousel />
				<Carrousel2 />
				<Carrousel3 />
				<div className="home-section2">
					<div>
						<h3>Join today!</h3>
						<p>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, HBO y Amazon Prime Video.</p>
						<button className="link-button2" type="button"><a href="/signup">Register</a></button>
					</div>
					<div>
						<ul className="home_section2_list">
							<li>Enjoy MovieDick without ads</li>
							<li>Keep a personal watchlist</li>
							<li>Filter your subscriptions to streaming services and find something to watch</li>
							<li>Record the movies and TV shows you've watched</li>
							<li>Create personal lists</li>
							<li>Contribute and improve our database</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;