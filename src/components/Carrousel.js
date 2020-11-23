import React, { Component } from 'react';
import service from '../api/service'

class Carrousel extends Component {

    state = {
      movies: []
  }

  getCarrouselMovies = async () => {
    let res = await service.getCarrouselMovies();
    this.setState({ movies: res })

  }

  componentDidMount = () => {
      this.getCarrouselMovies();
  }

  render() {
    return (
      <div className="row__inner">
        {this.state.movies.map((allMovie) => {
          return(
          <div className="tile" key={allMovie._id}>
            <div className="tile__media">
              <img className="tile__img" src={allMovie.poster} alt="" />
            </div>
            <div className="tile__details">
              <div className="tile__title">
              <a href={`/details/${allMovie._id}`}>More Details</a>
              </div>
            </div>
          </div>
        )
        })}
      </div>  
    );
  }
}

export default Carrousel;


