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
                                        <li>2h 49min  /</li>
                                        <li>Adventure, Drama, Sci-Fi,</li>
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
                                    <p class="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great
              Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
                                </div>
                            </div>
                            <div class="mr-grid actors-row">
                                <div class="col1">
                                    <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
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








