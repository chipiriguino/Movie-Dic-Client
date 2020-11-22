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
        console.log("THIS STATE USER ID", this.state.user)
      }

      getFavId = async (props) => {
        let res = await service.getFavId();
        this.setState({ favorites: this.props.user.favorites })
        console.log("THIS FAVS MOVIES", this.state.favorites)
      }

      getAllMovies = async () => {
        let res = await service.getAllMovies();
        this.setState({ movies: res })
        //console.log('MOVIES FAVORITES JS', this.state.movies)
    }

    componentDidMount = () => {
        this.getProfileUser();
        this.getFavId();
        this.getAllMovies();
    }


    render() {
        return (
            <div>
                <h2>Your Favorites</h2>
                {this.state.favorites.map((eachFav) => {
                        return (
                            <div key={eachFav._id} className="movie_card" id="bright">
                               <h3>holissss</h3>
                            </div>
                        );
                })
            }  
            </div>
        );
    }
}

export default Favorites;