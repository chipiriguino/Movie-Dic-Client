import React, { Component } from 'react';
import service from '../api/service';
import Button from 'react-bootstrap/Button';


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
                <div className="padding-top-details"> </div>
                <div class="cellphone-container">
                    <div class="movie2">
                        <div class="movie-img" style={{backgroundImage: `url(${movie.poster})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}></div>
                        <div class="text-movie-cont">
                            <div class="mr-grid">
                                <div class="coll1">
                                    <h1>{movie.movie_title}</h1>
                                    <ul class="movie-gen">
                                        <li>{movie.content_rating}  /</li>
                                        <li>{movie.duration} min  /</li>
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
                                        <li>Likes: {movie.num_voted_users}</li>
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
                                    <p class="movie-actors">Actors: {movie.actor_1_name}, {movie.actor_2_name}, {movie.actor_3_name}</p>
                                    <p class="movie-actors">Imdb Score: {movie.imdb_score}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="align-delete">
                    <Button onClick={() => this.deleteMovie(movie._id)} className="primary" variant="primary" size="sm" active>Delete</Button>
                    <Button className="primary" variant="primary" size="sm" active><a href="/credits">View...</a></Button>
                </div>
            </div>
        );
    }
}

export default DetailsMovie;








