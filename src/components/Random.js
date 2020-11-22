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
            <div className ="container">
                <h1>Random</h1>
                <div key={this.state.movies._id}>
                    <h3>{this.state.movies.language}</h3>
                    <h4>{this.state.movies.director_name}</h4>
                    <h4>{this.state.movies.movie_title}</h4>
                    <img src={this.state.movies.poster} alt={`${this.state.movies.movie_title} + photo`}/>
                    <hr />
                </div>
                <div>
                    <button onClick={()=> this.getRandom(this.state.movies._id)}>Another please!</button>
                </div>
            </div>
        );
    }
}

export default Random;