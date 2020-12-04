import React, { Component } from 'react';
import service from '../api/service'
import {withAuth} from '../lib/AuthProvider'
import Paginacion from './Paginacion';

class AllMovies extends Component {
    state = {
        movies: [],
        pagina: ""
    }

    scroll = () => {
        const elemento = document.querySelector('.allmovies-section');
        elemento.scrollIntoView('smooth', 'start');
    }

    getAllMovies = async () => {
        let res = await service.getAllMovies(this.state.pagina);
        this.setState({
          movies: res,
        })
    }

    // getMoviesFromApi = async () => {
    //     axios.get("")
    // }

    paginaAnterior = () => {
        console.log('Anterior....')
        let pagina = this.state.pagina
        if(pagina === 0) return null;
        pagina --;
        this.setState({ pagina: pagina })
        this.scroll();
      }
    
    paginaSiguiente = () => {
        console.log('Siguiente....')
        let pagina = this.state.pagina
        pagina ++;
        this.setState({ pagina: pagina })
        this.scroll();
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
        this.getAllMovies();
    }

    componentDidUpdate = () => {
        this.getAllMovies();
    }

    render() {
        return (
            <div className="container2">  
                <div className="allmovies-section">
					<h1>All movies</h1>
					<h3>Find the movie you are looking for, add it to your favorites list and enjoy!</h3>
				</div>
                {this.state.movies && this.state.movies.map((allMovie) => {
                    return (
                        <div key={allMovie._id} className="movie_card" id="bright" style={{backgroundImage: `url(${allMovie.fan_art})`, backgroundSize: `cover`, backgroundPosition: `cover`, backgroundRepeat: `no-repeat`}}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={allMovie.poster} alt="Poster"/>
                                    <h4>{allMovie.movie_title}</h4>
                                    <h4>{allMovie.title_year}, {allMovie.director_name}</h4>
                                    <span className="minutes">{allMovie.duration} min</span>
                                    <p className="type">{allMovie.genres}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{allMovie.description}</p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li><a href={`/upload/${allMovie._id}`} className="material-icons">Edit Movie</a></li>
                                        <li><a href={`/details/${allMovie._id}`} >More Details</a></li>
                                        <li><button className="link-button" type="button" onClick={()=> this.addToFavourite(allMovie._id)}>Add to fav</button></li>
                                        <li><button className="link-button" type="button" onClick={()=> this.addToFeed(allMovie._id)}>Share!</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back bright_back"></div>
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

export default withAuth(AllMovies);