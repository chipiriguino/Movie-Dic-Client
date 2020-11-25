import React, { Component } from 'react';
import service from '../api/service';
// import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Random extends Component {
    state = {
        movies: []
    }

    getRandom = async () => {
        let res = await service.getRandom();
        this.setState({ movies: res })
        console.log('MOVIE random?', this.state.movies.movie_title)
    }

    componentDidMount = () => {
        this.getRandom();
    }

    render() {
        const  movie  = this.state.movies

        return (
            <div classname="background-details" style={{backgroundImage: `url(${movie.fan_art})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                <div className="padding-top-details"> </div>
                <div class="cellphone-container">
                    <div class="movie2">
                        <div class="movie-img" style={{backgroundImage: `url(${this.state.movies.poster})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}></div>
                        <div class="text-movie-cont">
                            <div class="mr-grid">
                                <div class="coll1">
                                    <h1>{movie.movie_title}</h1>
                                    <ul class="movie-gen">
                                        <li>PG-13  /</li>
                                        <li>{movie.duration}min  /</li>
                                        <li>{movie.genres}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mr-grid summary-row">
                                <div class="col2">
                                    <h5 className=" h5-details">SUMMARY</h5>
                                </div>
                                <div class="col2">
                                    <ul class="movie-likes">
                                        <li><i class="material-icons">&#xE813;</i>124</li>
                                        <li><i class="material-icons">&#xE813;</i>3</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mr-grid">
                                <div class="col1">
                                    <p class="movie-description">{movie.description}</p>
                                </div>
                            </div>
                            <div class="mr-grid actors-row">
                                <div class="col1">
                                <p class="movie-actors">Director: {movie.director_name}</p>
                                    <p class="movie-actors">Actors: {movie.actor_2_name}, {movie.actor_3_name}</p>
                                    <p class="movie-actors">Language: {movie.language}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="align-delete">
                <button className="boton verde" onClick={() => this.getRandom(movie._id)}>Another please!</button>
                </div>
                {/* <div className="button-random">
                <button className="boton verde" onClick={() => this.getRandom(movie._id)}>Another please!</button>
                </div> */}
            </div>
        );
    }
}

export default Random;