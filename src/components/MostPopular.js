import React, { Component } from 'react';
import service from '../api/service';
import { withAuth } from '../lib/AuthProvider';
import Paginacion from './Paginacion';

class MostPopular extends Component {
    state = {
        movies: [],
        pagina: 0,
        changer: 'movie',
        image: 'https://image.tmdb.org/t/p/w500'
    }

    getMostPopular = async () => {
        let res = await service.getTmdbApi2();
        this.setState({ movies: res })
        console.log(this.state.movies, "MOVIES TMDB?¿?")
    }

    scroll = () => {
        const elemento = document.querySelector('.popular-section');
        elemento.scrollIntoView('smooth', 'start');
    }

    paginaAnterior = () => {
        let pagina = this.state.pagina
        if (pagina === 0) return null;
        pagina--;
        this.setState({ pagina: pagina })
        this.scroll();
    }

    paginaSiguiente = () => {
        let pagina = this.state.pagina
        pagina++;
        this.setState({ pagina: pagina })
        this.scroll();
    }

    addToFavourite = async (movieId) => {
        let userId = this.props.user._id;
        let res = await service.addToFavourite(movieId, userId);
        this.setState({ favorite: res })
    }

    componentDidMount = () => {
        this.getMostPopular();
    }

    componentDidUpdate = () => {
        this.getMostPopular();
    }

    render() {
        const movies = this.state.movies;
        return(
            <div className="container2">
                <div className="popular-section">
					<h1>Most popular</h1>
					<h3>Browse the most popular movies among users, find the one you are looking for and add it to favorites to have your list of movies! Hope you enjoy!</h3>
				</div>
                {movies?.map((eachMovie) => {
                    return(
                        <div key={eachMovie._id} className="movie_card" id="bright" style={{ backgroundImage: `url(${this.state.image}${eachMovie.backdrop_path})`, backgroundSize: `cover`, backgroundPosition: `top`, backgroundRepeat: `no-repeat` }}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={`${this.state.image}${eachMovie.poster_path}`} alt={eachMovie.name} />
                                    <h4>{eachMovie.name}</h4>
                                    <h4>{eachMovie.title_year}, {eachMovie.director_name}</h4>
                                    <span className="minutes">{eachMovie.duration} min</span>
                                    <p className="type">{eachMovie.genres}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{eachMovie.overview}</p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li><a href={`/upload/${eachMovie._id}`} className="material-icons">Update movie</a></li>
                                        <li><a href={`/details/${eachMovie._id}`} className="material-icons">More Details</a></li>
                                        <li><button onClick={() => this.addToFavourite(eachMovie._id)} className="link-button" type="button">Add to fav</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })};
                <div className="align-delete">
                    <Paginacion
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
            </div>
        );
    }
}

export default withAuth(MostPopular);


