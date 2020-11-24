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
            <div class="container2">
                <a  className="backg-details" href="#"><img src={movie.poster} alt="cover" class="cover" /></a>
                <div class="hero" style={{backgroundImage: `url(${movie.fan_art})`, backgroundSize: `100%`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                    <div class="details">
                        <div class="title1"><h3>{movie.movie_title}</h3></div>
                        {/* <div class="title2">The Battle of the Five Armies</div> */}
                        
                        <span class="likes"><strong>{movie.movie_facebook_likes} likes</strong></span>
                    </div>
                </div>
                <div class="description">

                    <div class="column1">
                    <fieldset class="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" checked /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </fieldset>
                        <span class="tag "><i className="genre1">{movie.genres}</i></span>
                        
                    </div>

                    <div class="column2">
                        
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
                        
                        {/* <div class="avatars">
                            <a href="#" data-tooltip="Person 1" data-placement="top">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
                            </a>

                            <a href="#" data-tooltip="Person 2" data-placement="top">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
                            </a>


                            <a href="#" data-tooltip="Person 3" data-placement="top">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
                            </a>
                            
                        </div> */}
                        <div className="align-delete"><button className="boton rojo" onClick={()=> this.deleteMovie(movie._id)}>Delete</button>
                        <a href="/credits"><button className="boton azul">View</button></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsMovie;



