import React, { Component } from 'react';
import service from '../api/service'

class Carrousel2 extends Component {

    state = {
      movies: []
  }

  getCarrouselMovies2 = async () => {
    let res = await service.getCarrouselMovies2();
    this.setState({ movies: res })

  }

  componentDidMount = () => {
      this.getCarrouselMovies2();
  }

  render() {
    return (
      <div className="row__inner">
        {this.state.movies.map((eachMovie) => {
          return(
          <div className="tile" key={eachMovie._id}>
            <div className="tile__media">
              <img className="tile__img" src={eachMovie.poster} alt="" />
            </div>
            <div className="tile__details">
              <div className="tile__title">
              <a href={`/details/${eachMovie._id}`}>More Details</a>
              </div>
            </div>
          </div>
        )
        })}
      </div>  
    );
  }
}

export default Carrousel2;
