import React, { Component } from 'react'
import service from '../api/service';

class MovieTmdb extends Component {
    state = {
        movies: [],
    }

    getMovies = async () => {
        let res = await service.getTmdbApi2();
        this.setState({ movies: res })
        console.log(this.state.movies, "MOVIES COMPONENT")
    }

    addToFavourite = async (movieId) => {
        let userId = this.props.user._id;
        let res = await service.addToFavourite(movieId, userId);
        this.setState({ favorite: res })
    }

    addToFeed = async (movieId) => {
        let userId = this.props.user._id;
        let res = await service.addToFeed(movieId, userId);
        this.setState({ feed: res })
    }

    componentDidMount = () => {
        this.getMovies();
    }

    componentDidUpdate = () => {
        this.getMovies();
    }

    render() {
        return (
            <>
                <div className="home-section">
					<h2>The best movies on</h2>
					<h1>TMDB!!</h1>
				</div>
                <div className="container2">
                {this.state.movies && this.state.movies.map((allMovie) => {
                    return (
                        <div key={allMovie._id} className="movie_card" id="bright" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${allMovie.backdrop_path}`, backgroundSize: `cover`, backgroundPosition: `cover`, backgroundRepeat: `no-repeat`}}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={`https://image.tmdb.org/t/p/w500${allMovie.poster_path}`} alt="Poster"/>
                                    <h4>{allMovie.name}</h4>
                                    <h4>{allMovie.first_air_date}</h4>
                                    <h5>Score: {allMovie.vote_average}</h5>
                                    <span className="votes">Num votes: {allMovie.vote_count}</span>
                                    <p className="type">{allMovie.genres}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{allMovie.overview}</p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li><a href={`/upload/${allMovie._id}`} className="material-icons">Edit Movie</a></li>
                                        <li><a href={`/details/${allMovie._id}`} >More Details</a></li>
                                        <li><button className="link-button" type="button" onClick={()=> this.addToFavourite(allMovie.id)}>Add to fav</button></li>
                                        <li><button className="link-button" type="button" onClick={()=> this.addToFeed(allMovie.id)}>Share!</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back bright_back"></div>
                        </div>
                    );
                })};
                </div>
            </>
        )
    }
}

export default MovieTmdb;
