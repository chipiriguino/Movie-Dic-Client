import React, { Component } from 'react';
import service from '../api/service';
import { withAuth } from '../lib/AuthProvider';
import Paginacion from './Paginacion';

class MostPopular extends Component {
    state = {
        movies: [],
        pagina: ""
    }

    getMostPopular = async () => {
        let res = await service.getMostPopular(this.state.pagina);
        this.setState({ movies: res })
    }

    paginaAnterior = () => {
        let pagina = this.state.pagina
        if (pagina === 0) return null;
        pagina--;
        this.setState({ pagina: pagina })
    }

    paginaSiguiente = () => {
        let pagina = this.state.pagina
        pagina++;
        this.setState({ pagina: pagina })
    }

    addToFavourite = async (movieId) => {
        let userId = this.props.user._id;
        console.log('USERID DE MOSTPOPULAAARRRRRR', userId)
        let res = await service.addToFavourite(movieId, userId);
        this.setState({ favorite: res })
        console.log('FAVORITO STATE MOSTPOPULAR!!!!', this.state)
    }

    componentDidMount = () => {
        this.getMostPopular();
    }

    componentDidUpdate = () => {
        this.getMostPopular();
    }

    render() {
        return(
            <div className="container2">
                {this.state.movies.map((eachMovie) => {
                    return(
                        <div key={eachMovie._id} className="movie_card" id="bright" style={{ backgroundImage: `url(${eachMovie.fan_art})`, backgroundSize: `100%`, backgroundPosition: `cover`, backgroundRepeat: `no-repeat` }}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={eachMovie.poster} alt={eachMovie.movie_title} />
                                    <h4>{eachMovie.movie_title}</h4>
                                    <h4>{eachMovie.title_year}, {eachMovie.director_name}</h4>
                                    <span className="minutes">{eachMovie.duration} min</span>
                                    <p className="type">{eachMovie.genres}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{eachMovie.description}</p>
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


