import React, { Component } from 'react';
import service from '../api/service';

class Favorites extends Component {
    state = {
        user: {},
        movies: [],
        favorites: []
    }

    getProfileUser = async () => {
        await service.getProfileUser(this.props.user);
        this.setState({ user: this.props.user })
    }

    getFavId = async () => {
        let res = await service.getFavId(this.props.user._id);
        this.setState({ favorites: res.favorites })
    }

    deleteFavourite = async (movieId) => {
        const userId = this.props.user_id;
        await service.deleteFavourite(userId, movieId);
        this.getFavId();
    }

    componentDidMount = () => {
        this.getProfileUser();
        this.getFavId();
    }

    render() {
        console.log("THIS STATE FAVOURITES", this.state.favorites)
        return (
            <div className="row__inner">
                {this.state.favorites && this.state.favorites.map((eachFav) => {
                    console.log(eachFav._id, "ID EACHFAV")
                    return (
                        <div className="tile" key={eachFav._id}>
                            <div className="tile__media">
                                <img className="tile__img" src={eachFav.poster} alt="" />
                            </div>
                            <div className="tile__title">
                                <a href={`/details/${eachFav._id}`}>Details</a>
                                <button onClick={() => this.deleteFavourite(eachFav._id)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Favorites;