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
                <h2>Your Favorites</h2>
                {this.state.favorites.map((eachFav) => {
                        return (
                            <div key={eachFav._id} className="movie_card" id="bright">
                               <h3>{eachFav.movie_title}</h3>
                               <img src={eachFav.poster} />
                            </div>
                        );
                })
            }  
            </div>
        );
    }
}

export default Favorites;