import React, { Component } from 'react';
import service from '../api/service';
import {withAuth} from '../lib/AuthProvider'

class Favorites extends Component {
    state = {
        user: {},
        movies: [],
        favorites: []
    }

    getProfileUser = async () => {
        let res = await service.getProfileUser(this.props.user);
        this.setState({ user: this.props.user })
        // console.log("THIS STATE USER ID", this.state.user)
      }

      getFavId = async () => {
        let res = await service.getFavId(this.props.user._id);
        this.setState({ favorites: res.favorites })
      }

    componentDidMount = () => {
        this.getProfileUser();
        this.getFavId();
    }


    render() {
        console.log('ARRAY FAVORITEEEEEEEEEEEEEEEEESSSSS', this.state.favorites)
        return (
            <div>
                <h2 className="title-fav">Your Favorites</h2>
                {this.state.favorites.map((eachFav) => {
                        return (
                            <div className="movie_card" id="bright" style={{backgroundImage: `url(${eachFav.poster})`, backgroundSize: `100%`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={eachFav.poster} />
                                    <h4>{eachFav.movie_title}</h4>
                                    <h4>{eachFav.title_year}, {eachFav.director_name}</h4>
                                    <span className="minutes">{eachFav.duration} min</span>
                                    <p className="type">{eachFav.genres}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{eachFav.description}</p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li><a href={`/upload/${eachFav._id}`} className="material-icons">Update movie</a></li>
                                        <li><a href={`/details/${eachFav._id}`} className="material-icons">More Details</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back bright_back"></div>
                        </div>
                        );
                })
            }  
            </div>
        );
    }
}

export default Favorites;