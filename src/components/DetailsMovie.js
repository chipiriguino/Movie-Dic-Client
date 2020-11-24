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
            <div className="container2">
                <a  className="backg-details" href="#"><img src={movie.poster} alt="cover" className="cover" /></a>
                <div className="hero" style={{backgroundImage: `url(${movie.fan_art})`, backgroundSize: `100%`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                    <div className="details">
                        <div className="title1"><h3>{movie.movie_title}</h3></div>
                        {/* <div className="title2">The Battle of the Five Armies</div> */}
                        
                        <span className="likes"><strong>{movie.movie_facebook_likes} likes</strong></span>
                    </div>
                </div>
                <div className="description">

                    <div className="column1">
                    <fieldset className="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label className="full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" checked /><label className="full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label className="full" for="star3" title="Meh - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label className="full" for="star2" title="Kinda bad - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label className="full" for="star1" title="Sucks big time - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </fieldset>
                        <span className="tag "><i className="genre1">{movie.genres}</i></span>
                        
                    </div>

                    <div className="column2">
                        
                        <p className="media-details">{movie.description}</p>
                        <div className="align-details1">
                            <ul>
                        <p>Language: {movie.language}</p>
                        <p>Duration: {movie.duration} minutes</p>
                        <p>Year title: {movie.title_year}</p>
                        <p>Director: {movie.director_name}</p>
                        <p>Principal actor: {movie.actor_2_name}</p>
                        <p>Secundary actor: {movie.actor_3_name}</p>
                        </ul>
                        </div>
                        
                        <div className="align-delete"><button className="boton rojo" onClick={()=> this.deleteMovie(movie._id)}>Delete</button>
                        <a href="/credits"><button className="boton azul">View</button></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsMovie;



