import React, { Component } from 'react';
import service from '../api/service';
import { Link} from "react-router-dom";


class DetailsMovie extends Component {
    state = {
        movie:{}
    }
    getDetailsMovie = async () => {
        let res = await service.getDetailsMovie(this.props.match.params.id);
        this.setState({ movie: res })
    }

    deleteMovie = async () => {
        await service.deleteMovie(this.props.match.params.id);
    }

    componentDidMount = () => {
        this.getDetailsMovie();
    }

    
    render() {
        const{movie}= this.state
        console.log('DETAILSPAGE----JS', movie)
        return (
            <div className ="container">
                <h1>DETAILS PAGE</h1>
                <div key={movie._id}>
                <img src={movie.poster} />
                    <h3>Language:{movie.language}</h3>
                    <h4>Director:{movie.director_name}</h4>
                    <h4>Title:{movie.movie_title}</h4>
                    <h4>Duration:{movie.duration} minutes</h4>
                    <h4>Release year:{movie.title_year}</h4>
                    <h4>Score:{movie.imdb_score}</h4>
                    <button type="submit"><Link to={`/delete/${movie._id}`}>Delete movie</Link></button>
                    
                </div>

            </div>
        );
    }
}

export default DetailsMovie;