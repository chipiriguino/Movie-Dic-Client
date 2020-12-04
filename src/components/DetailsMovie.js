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
        console.log(this.props.match.params.id, 'PROPS?????')
        const { movie } = this.state
        return (
            <div className="background-details" style={{backgroundImage: `url(${movie.fan_art})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                <div className="padding-top-details"> </div>
                <div className="cellphone-container">
                    <div className="movie2">
                        <div className="movie-img" style={{backgroundImage: `url(${movie.poster})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}></div>
                        <div className="text-movie-cont">
                            <div className="mr-grid">
                                <div className="coll1">
                                    <h1>{movie.movie_title}</h1>
                                    <ul className="movie-gen">
                                        <li>{movie.content_rating}  /</li>
                                        <li>{movie.duration} min  /</li>
                                        <li>{movie.genres}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid summary-row">
                                <div className="col2">
                                    <h5 className=" h5-details">SUMMARY</h5>
                                </div>
                                <div className="col2">
                                    <ul className="movie-likes">
                                        <li>Likes: {movie.num_voted_users}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid">
                                <div className="col1">
                                    <p className="movie-description">{movie.description}</p>
                                </div>
                            </div>
                            <div className="mr-grid actors-row">
                                <div className="col1">
                                <p className="movie-actors">Director: {movie.director_name}</p>
                                    <p className="movie-actors">Actors: {movie.actor_1_name}, {movie.actor_2_name}, {movie.actor_3_name}</p>
                                    <p className="movie-actors">Imdb Score: {movie.imdb_score}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="align-delete">
                    <Button onClick={() => this.deleteMovie(movie._id)} className="primary" variant="primary" size="sm" active>Delete</Button>
                    <Button className="primary" variant="primary" size="sm" active><a href="/credits">View...</a></Button>
                    <Button className="primary" variant="primary" size="sm" active><a href={`/upload/${movie._id}`}>Edit</a></Button>
                </div>
            </div>
        );
    }
}

export default DetailsMovie;








