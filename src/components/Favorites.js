import React, { Component } from 'react';
import service from '../api/service';

class Favorites extends Component {
    state = {
        movies: []
      }
    
      getAllMovies = async () => {
          let res = await service.getAllMovies();
          this.setState({ movies: res })
      }
    
      componentDidMount = () => {
          this.getAllMovies();
      }
    render() {
        console.log('CONSOLE LOG FAVORITES COMPONEEEEENT', this.props.user.favorites)
        console.log('ARRAY MOVIES FAVORITES COMPONEEEEENT', this.state.movies)
        return (
            <div>
                <h2>Your Favorites</h2>
                {this.props.user.favorites.map(() => {
                    return (
                        <div className="movie_card" id="bright">
                           <h3>hola</h3>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Favorites;