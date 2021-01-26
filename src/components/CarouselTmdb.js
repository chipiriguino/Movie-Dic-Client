import React, { Component } from 'react';
import service from '../api/service'
import { Form } from 'react-bootstrap';

class Carrousel3 extends Component {

  state = {
    movies: [],
    weekDay: "day",
    movieOrTv: "movie",
    image: 'https://image.tmdb.org/t/p/w500'
  }

  getMoviesTmdb = async () => {
    let filter = this.state.weekDay;
    let changer = this.state.movieOrTv;
    let res = await service.getTmdbApi(filter, changer);
    //console.log(res, "componente res")
    this.setState({ movies: res })
  }

  componentDidMount = () => {
    this.getMoviesTmdb();
  }

  componentDidUpdate = () => {
    this.getMoviesTmdb();
  }

  filterChangeDay = () => {
    let filter = this.state.weekDay;
    if(filter === "day"){
      this.setState({ weekDay: "week" })
    }
  }
  
  filterChangeWeek = () => {
    let filter = this.state.weekDay;
    if(filter === "week"){
      filter = "day";
      this.setState({ weekDay: filter })
    }
  }

  changeMovieOrTv = () => {
    let changer = this.state.movieOrTv;
    if(changer === "movie"){
      changer = "tv";
      this.setState({ movieOrTv: changer});
    }else {
      this.setState({movieOrTv: "movie"})
    }
  }

  render() {
    return (
      <div className="row__inner">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select by day or week</Form.Label>
              <Form.Control as="select">
                <option onClick={() => this.filterChangeWeek()}>Week</option>
                <option onClick={() => this.filterChangeDay()}>Day</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Movie / TV Show</Form.Label>
              <Form.Control as="select">
                <option onClick={() => this.changeMovieOrTv()}>Movie</option>
                <option onClick={() => this.changeMovieOrTv()}>TV</option>
              </Form.Control>
            </Form.Group>
          </Form>
        <div className="title-carrousel">
          <h1 className="home-txt-carrousel" >Trending</h1>
        </div>
        {this.state.movies?.map((eachMovie) => {
          return (
            <div className="tile" key={eachMovie.id}>
              <div className="tile__media">
                <img className="tile__img" src={`${this.state.image}${eachMovie.poster_path}`} alt="" />
              </div>
              <div className="tile__title">
                <a href={`/details/${eachMovie.id}`}>More Details</a>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Carrousel3;