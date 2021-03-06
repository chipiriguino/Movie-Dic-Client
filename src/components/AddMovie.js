import React, { Component } from "react";
import service from "../api/service";
import Button from 'react-bootstrap/Button';


class AddMovie extends Component {
  state = {
    movie_title: "",
    description: "",
    poster: "",
    genres: "",
    director_name: "",
    content_rating: "",
    country: "",
    language: "",
    movie_imdb_link: "",
    title_year:  "",
    imdb_score:  "",
    actor_1_name:  "",
    actor_2_name:  "",
    actor_3_name:  "",
    fan_art: ""
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

  handleFileUpload2 = async (e) => {
    console.log("the file to be uploaded is: ", e.target.files[0]);

    // creamos un nuevo objeto FormData
    const uploadData = new FormData();

    // poster (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
    uploadData.append("fan_art", e.target.files[0]);

    try {
      const res = await service.handleUpload2(uploadData);

      console.log("response is", res);

      this.setState({ fan_art: res.secure_url });
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
        poster: "",
        genres: "",
        director_name: "",
        content_rating: "",
        country: "",
        language: "",
        movie_imdb_link: "",
        title_year:  "",
        imdb_score:  "",
        actor_1_name:  "",
        actor_2_name:  "",
        actor_3_name:  "",
        fan_art: ""
      });

      // this.props.getMovies()
    } catch (error) {
      console.log("Error while adding the movie: ", error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} className="edit-form">
          <h2>New Movie</h2>
          <label htmlFor="">Name</label>
          <input
            className="input"
            type="text"
            name="movie_title"
            value={this.state.movie_title}
            onChange={(e) => this.handleChange(e)}
          />
          
          <label htmlFor="">Genre</label>
          <input
            className="input"
            type="text"
            name="genres"
            value={this.state.genres}
            placeholder={this.state.genres}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Director Name: </label>
          <input
            className="input"
            type="text"
            name="director_name"
            value={this.state.director_name}
            placeholder={this.state.director_name}
            onChange={(e) => this.handleChange(e)}
            
          />

          <label htmlFor="">Description: </label>
          <textarea
            type="textarea"
            rows="10" cols="50"
            name="description"
            value={this.state.description}
            textarea={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Rating: </label>
          <input
            className="input"
            type="text"
            name="content_rating"
            value={this.state.content_rating}
            placeholder={this.content_rating}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Country: </label>
          <input
            className="input"
            type="text"
            name="country"
            value={this.state.country}
            placeholder={this.country}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Language: </label>
          <input
            className="input"
            type="text"
            name="language"
            value={this.state.language}
            placeholder={this.language}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">IMDB Link:</label>
          <input
            className="input"
            type="text"
            name="movie_imdb_link"
            value={this.state.movie_imdb_link}
            placeholder={this.movie_imdb_link}
            onChange={(e) => this.handleChange(e)}
          />
          
          <label htmlFor="">Actor 1 name:</label>
          <input
            className="input"
            type="text"
            name="actor_1_name"
            value={this.state.actor_1_name}
            placeholder={this.actor_1_name}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Actor 2 name:</label>
          <input
            className="input"
            type="text"
            name="actor_2_name"
            value={this.state.actor_2_name}
            placeholder={this.actor_2_name}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Actor 3 name:</label>
          <input
            className="input"
            type="text"
            name="actor_3_name"
            value={this.state.actor_3_name}
            placeholder={this.actor_3_name}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">IMDB Score:</label>
          <input
            className="input"
            type="text"
            name="imdb_score"
            value={this.state.imdb_score}
            placeholder={this.imdb_score}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Year:</label>
          <input
            className="input"
            type="text"
            name="title_year"
            value={this.state.title_year}
            placeholder={this.title_year}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Select poster:</label>
          <input className="input" type="file" onChange={(e) => this.handleFileUpload(e)} />

          <label htmlFor="">Select fan art:</label>
          <input className="input" type="file" onChange={(e) => this.handleFileUpload2(e)} />
          <Button variant="primary" size="sm" active type="submit">Save new movie</Button>
          {/* <button className="boton azul" type="submit">Save new movie</button> */}
        </form>
      </div>
    );
  }
}

export default AddMovie;