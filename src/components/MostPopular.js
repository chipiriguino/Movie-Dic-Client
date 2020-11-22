import React, { Component } from 'react';
import service from '../api/service';
import { Link} from "react-router-dom";
import {withAuth} from '../lib/AuthProvider'

class MostPopular extends Component {
    state = {
        movies: [],
    }

    getMostPopular = async () => {
        let res = await service.getMostPopular();
        console.log('HOLIIIIIIII', res)
        this.setState({ movies: res })
    }

    addToFavourite = async (movieId) => {
        let userId = this.props.user._id;
        console.log('USERID DE MOSTPOPULAAARRRRRR', userId)
        let res = await service.addToFavourite(movieId, userId);
        this.setState({ favorite: res })
        console.log('FAVORITO STATE MOSTPOPULAR!!!!', this.state)
    }

    componentDidMount = () => {
        this.getMostPopular();
    }

    render() {
        return (
        <div className="container">
            <div className="title-most">
                <h1>MOST POPULAR PAGE</h1>
            </div>
            {this.state.movies.map((eachMovie) => {
            return (
                    <div className="cellphone-container">    
                        <div className="movie">       
                            <div className="menu2"><i className="material-icons"></i></div>
                                <div className="movie-img" style={{backgroundImage: `url(${eachMovie.poster})`}}></div>
                                    <div className="text-movie-cont">
                                        <div className="mr-grid">
                                            <div className="col1">
                                                <h1>{eachMovie.movie_title}</h1>
                                                <ul className="movie-gen">
                                                    <li>{eachMovie.content_rating} /</li>
                                                    <li>{eachMovie.duration} min /</li>
                                                    <li>{eachMovie.genres}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mr-grid summary-row">
                                            <div className="col2">
                                            <h5>SUMMARY</h5>
                                        </div>
                                        <div className="col2">
                                            <ul className="movie-likes">
                                                <li><i className="material-icons">&#xE813;</i>{eachMovie.movie_facebook_likes}</li>
                                                <li><i className="material-icons">&#xE813;</i>3</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mr-grid">
                                        <div className="col1">
                                            <p className="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great 
                                            Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
                                    </div>
                                </div>
                                <div className="mr-grid actors-row">
                                    <div className="col1">
                                        <p className="movie-actors">{eachMovie.actor_1_name}, {eachMovie.actor_2_name}, {eachMovie.actor_3_name}</p>
                                    </div>
                                </div>
                                <div className="mr-grid action-row">
                                    <div className="col2"><div className="watch-btn"><h3><i className="material-icons">&#xE037;</i>MORE DETAILS</h3></div>
                                </div>
                                <div className="col6 action-btn"><i className="material-icons">&#xE161;</i></div>
                                <div className="col6 action-btn"><i className="material-icons">&#xE866;</i></div>
                                <div className="col6 action-btn"><i className="material-icons">&#xE80D;</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
        );
    }
}

export default withAuth(MostPopular);


