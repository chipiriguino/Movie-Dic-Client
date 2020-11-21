import React, { Component } from 'react';
import service from '../api/service';
import {withAuth} from '../lib/AuthProvider'

class Favorites extends Component {
    state = {
        favoriteArray: []
    }

    render() {
        console.log('CONSOLE LOG FAVORITES', this.state.favoriteArray)

        return (
            <div>
                <h2>Your Favorites</h2>
                {/* {this.props.user.favorites.map(() => {
                    return (
                        <div className="movie_card" id="bright">
                           <h3>{this.props.user.favorites}</h3>
                        </div>
                    );
                })} */}
            </div>
        );
    }
}

export default Favorites;