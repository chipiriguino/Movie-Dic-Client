import React, { Component } from 'react';
import service from '../api/service';
import { Link} from "react-router-dom";

class MostPopular extends Component {
    state = {
        movies: []
    }

    getMostPopular = async () => {
        let res = await service.getMostPopular();
        this.setState({ movies: res })
    }

    componentDidMount = () => {
        this.getMostPopular();
    }

    render() {
        return (
            <div className ="container">
                <h1>MOST POPULAR PAGE</h1>
                {this.state.movies.map((eachMovie) => {
                    return (
                        <div key={eachMovie._id}>
                            <h3>{eachMovie.language}</h3>
                            <h4>{eachMovie.director_name}</h4>
                            <h4>{eachMovie.movie_title}</h4>
                            <img src={eachMovie.poster} />
                            <Link to={`/details/${eachMovie._id}`}><button>More Details</button></Link>
                            <Link to={`/upload/${eachMovie._id}`}><button>Upload the movie</button></Link>
                        </div>
                    );
                })}

            </div>
        );
    }
}

export default MostPopular;