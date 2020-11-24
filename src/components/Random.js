import React, { Component } from 'react';
import service from '../api/service';
// import { Link} from "react-router-dom";

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
            <div class="movie-card">
            <div className="container">
                <div className="align-random">
                    <h1 className="h1-color-random">Random</h1>
                    <div key={this.state.movies._id}>
                        <img  className="align-img-random" src={this.state.movies.poster} alt={`${this.state.movies.movie_title} + photo`} />
                        <hr />
                    </div>
                    <div className="align-title-random">
                        <h3 className="align-txt-random h1-color-random" >{this.state.movies.movie_title}</h3>
                        <h4 className="align-txt-random h1-color-random">{this.state.movies.director_name}</h4>
                    </div>
                    <div>
                        <button className="boton verde" onClick={() => this.getRandom(this.state.movies._id)}>Another please!</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Random;