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
        console.log('DETAILSPAGE----JS', movie)
        return (
            <div className="container">
                <div className="align-details">
                <h1>DETAILS PAGE</h1>
                <div key={movie._id}>
                    <img src={movie.poster} />
                    <h2>Title:{movie.movie_title}</h2>
                    <h4>Director:{movie.director_name}</h4>
                    <h4>Duration:{movie.duration} minutes</h4>
                    <h4>Language:{movie.language}</h4>
                    <h4>Release year:{movie.title_year}</h4>
                    <h4>Number of likes received on social networks: {movie.movie_facebook_likes}</h4>
                    <h4>Score:{movie.imdb_score}</h4>
                    <button className="boton rojo" onClick={() => this.deleteMovie()}>Delete Movie</button>
                </div>
                </div>
            </div>
        );
    }
}

export default DetailsMovie;

