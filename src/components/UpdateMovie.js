import React, { Component } from "react";
import service from "../api/service";

class UpdateMovie extends Component {
  state = {
    movie_title: "",
    description: "",
    poster: "",
    genres: "",
    director_name: "",
    // movie: {}
  };

  getDetailsMovie = async () => {
    let res = await service.getDetailsMovie(this.props.match.params.id);
    this.setState({ movie_title: res.movie_title,
    description: res.description,
    poster: res.poster,
    genres: res.genres,
    director_name: res.director_name
  })
}

componentDidMount = () => {
    this.getDetailsMovie();
}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = async (e) => {
    console.log("the file to be uploaded is: ", );
    let poster = e.target.files[0]
    // creamos un nuevo objeto FormData
    const uploadData = new FormData();

    // poster (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
    uploadData.append("poster", e.target.files[0]);

    try {
      const res = await service.handleUpload(uploadData);

      

      this.setState({ poster: res.secure_url });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await service.updatedMovie(this.state, this.props.match.params.id);

      this.setState({
        movie_title: "",
        description: "",
        poster: "",
        genres: "",
        director_name: ""
      });

      // this.props.getMovies()
    } catch (error) {
      console.log("Error while adding the movie: ", error);
    }
  };

  render() {
    console.log('estas en updatemovieee', this.state)
    return (
      <div>
        <h2>Update the Movie</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">Name</label>
          <input type="text" name="movie_title" value={this.state.movie_title} placeholder={this.state.movie_title} onChange={(e) => this.handleChange(e)}/>
          
          <label htmlFor="">Genre</label>
          <input
            type="text"
            name="genres"
            value={this.state.genres}
            placeholder={this.state.genres}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Director Name</label>
          <input
            type="text"
            name="director_name"
            value={this.state.director_name}
            placeholder={this.state.director_name}
            onChange={(e) => this.handleChange(e)}
            
          />

          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            placeholder={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button className="boton azul" type="submit">Update the movie</button>
        </form>
      </div>
    );
  }
}

export default UpdateMovie;