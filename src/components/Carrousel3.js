import React, { Component } from 'react';
import service from '../api/service'

class Carrousel3 extends Component {

    state = {
      movies: []
  }

  getCarrouselMovies3 = async () => {
    let res = await service.getCarrouselMovies3();
    this.setState({ movies: res })

  }

  componentDidMount = () => {
      this.getCarrouselMovies3();
  }

  render() {
    return (
      <div className="row__inner">
        <h1 className="home-txt-carrousel">Most voted:</h1>
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

export default Carrousel3;