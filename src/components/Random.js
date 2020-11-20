import React, { Component } from 'react';
import service from '../api/service';
import { Link} from "react-router-dom";


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
        return (
            <div className ="container">
                <h1>Random</h1>
                <div key={this.state.movies._id}>
                    <h3>{this.state.movies.language}</h3>
                    <h4>{this.state.movies.director_name}</h4>
                    <h4>{this.state.movies.movie_title}</h4>
                    <img src={this.state.movies.poster} />
                    <hr />
                </div>
                <div>
                    <Link to="/random">Siguiente</Link>
                </div>
            </div>
        );
    }
}

export default Random;