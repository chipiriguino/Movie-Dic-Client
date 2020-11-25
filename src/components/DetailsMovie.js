import React, { Component } from 'react';
import service from '../api/service';


class DetailsMovie extends Component {
    state = {
        movie: {}
    }
    getDetailsMovie = async () => {
        let res = await service.getDetailsMovie(this.props.match.params.id);
        this.setState({ movie: res })
    }

    deleteMovie = async () => {
        await service.deleteMovie(this.props.match.params.id);
        this.props.history.push("/popular");
    }

    componentDidMount = () => {
        this.getDetailsMovie();
    }

    render() {
        const { movie } = this.state
        return (
            <div classname="background-details" style={{backgroundImage: `url(${movie.fan_art})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                <div class="cellphone-container">
                    <div class="movie2">
                        <div class="movie-img" style={{backgroundImage: `url(${movie.poster})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}></div>
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
                                    <h5>SUMMARY</h5>
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
                                    <p class="movie-description">{movie.description} </p>
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
            </div>
        );
    }
}

export default DetailsMovie;








