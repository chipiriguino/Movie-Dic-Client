import React, { Component } from 'react';
import service from '../api/service';
import { Link} from "react-router-dom";
import {withAuth} from '../lib/AuthProvider'

class MostPopular extends Component {
    state = {
        movies: [],
    }

    getMostPopular = async () => {
        let res = await service.getMostPopular();
        console.log('HOLIIIIIIII', res)
        this.setState({ movies: res })
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

    render() {
        return (
        <div className="container2">
                <h1>MOST POPULAR PAGE</h1>
            {this.state.movies.map((eachMovie) => {
                return (
                    <div className="movie_card" id="bright" style={{backgroundImage: `url(${eachMovie.poster})`, backgroundSize: `100%`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={eachMovie.poster} />
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
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back bright_back"></div>
                        </div>
                    );
                })}
        </div>
        );
    }
}

export default withAuth(MostPopular);


