import React, { Component } from 'react';
import service from '../api/service'
import { Link } from "react-router-dom";


class MostPopular extends Component {
    state = {
        movies: []
    }

    getAllMovies = async () => {
        let res = await service.getAllMovies();
        this.setState({ movies: res })
    }

    componentDidMount = () => {
        this.getAllMovies();
    }

    render() {
        return (
            <div className="container">
                <h1>All Movies PAGE</h1>
                {this.state.movies.map((allMovie) => {
                    return (
                        <div className="movie_card" id="bright">
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={allMovie.poster} />
                                    <h4>{allMovie.movie_title}</h4>
                                    <h4>{allMovie.title_year}, {allMovie.director_name}</h4>
                                    <span className="minutes">{allMovie.duration} min</span>
                                    <p className="type">{allMovie.genres}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">
                                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
      </p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li><i className="material-icons">share</i></li>
                                        <li><i className="material-icons"></i></li>
                                        <li><i className="material-icons">chat_bubble</i></li>
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

export default MostPopular;