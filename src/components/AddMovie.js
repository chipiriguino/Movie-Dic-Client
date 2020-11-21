import React, { Component } from "react";
import service from "../api/service";

class AddMovie extends Component {
  state = {
    movie_title: "",
    description: "",
    poster: "",
    genres: "",
    director_name: ""
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = async (e) => {
    console.log("the file to be uploaded is: ", e.target.files[0]);

    // creamos un nuevo objeto FormData
    const uploadData = new FormData();

    // poster (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
    uploadData.append("poster", e.target.files[0]);

    try {
      const res = await service.handleUpload(uploadData);

      console.log("response is", res);

      this.setState({ poster: res.secure_url });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await service.saveNewMovie(this.state);
      console.log("added", res);

      this.setState({
        movie_title: "",
        description: "",
        poster: ""
      });

      // this.props.getMovies()
    } catch (error) {
      console.log("Error while adding the movie: ", error);
    }
  };

  render() {
    return (
      <div>
        <h2>New Movie</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="movie_title"
            value={this.state.movie_title}
            onChange={(e) => this.handleChange(e)}
          />
          
          <label htmlFor="">Genre</label>
          <input
            type="text"
            name="genres"
            value={this.state.genres}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Director Name</label>
          <input
            type="text"
            name="director_name"
            value={this.state.director_name}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button className="boton azul" type="submit">Save new movie</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;