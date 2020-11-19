import React, { Component } from 'react';
import service from '../api/service'
import { Link} from "react-router-dom";


class MostPopular extends Component {
    state = {
        movies: []
    }

    getAllMovies = async () => {
        let res = await service.getAllMovies();
        console.log('RESPUESTA ALLMOVIES', this.state);
        this.setState({ movies: res })
        console.log('ARRAY LLENO ALLMOVIES?', this.state)
    }

    componentDidMount = () => {
        this.getAllMovies();
    }

    render() {
        console.log('AllMoviesJS', this.state.movies)
        return (
            <div className ="container">
                <h1>All Movies PAGE</h1>
                {this.state.movies.slice(0, 20).map((allMovie) => {
                    return (
                        <div key={allMovie._id}>
                            <h3>{allMovie.language}</h3>
                            <h4>{allMovie.director_name}</h4>
                            <h4>{allMovie.movie_title}</h4>
                            <img src={allMovie.poster} />
                            <Link to={`/details/${allMovie._id}`}><button>More Details</button></Link>
                        </div>
                    );
                })}

            </div>
        );
    }
}

export default MostPopular;