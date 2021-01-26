import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  API_KEY=process.env.REACT_APP_API_KEY

  // <----------- CLOUDINARY ------------>

  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/movies/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  handleUpload2 = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/movies/upload2", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  handleUpload3 = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/movies/private/update/", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // <----------- MOVIES ------------>

  saveNewMovie = async (newMovie) => {
    console.log("new thing is: ", newMovie);

    try {
      const res = await this.service.post("/movies/create", newMovie);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  updatedMovie = async (updatedMovie, id) => {
    console.log("updated movie is: ", updatedMovie);

    try {
      const res = await this.service.post("/movies/upload/" + id, {updatedMovie});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getMostPopular = async (pagina= 0) => {
    try {
      const res = await this.service.get(`/movies/popular?page=` + pagina);
      console.log(res.data, "res data service")
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getAllMovies = async (pagina= 0) => {
    try {
      const res = await this.service.get(`/movies/allmovies?page=` + pagina );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  searchMovie = async (query) => {
    try {
      const res = await this.service.get("/movies/search?find=" + query);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getRandom = async () => {
    try {
      const res = await this.service.get("/movies/random");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getDetailsMovie = async (id) => {
    try {
      const res = await this.service.get("/movies/details/"+ id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteMovie = async (id) => {
    try {
      const res = await this.service.post("/movies/delete/"+ id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //PROFILE USER

  getProfileUser = async (id) => {
    try {
      const res = await this.service.get("/auth/private/");
      console.log(res, "RES USERID")
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getProfileUser2 = async (id) => {
    try {
      const res = await this.service.get(`/movies/private/update/${id}`);
      console.log(res.data, "RES USERID")
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async ( id,  updatedUser ) => {
    console.log("updated profile is: ", updatedUser);

    try {
      const res = await this.service.put(`/movies/private/update/`, + id, {updatedUser});
      console.log(res, "RES DATA UPDATEPROFILE");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getFavId = async (id) => {
    try {
      const res = await this.service.get(`/movies/private/favorite/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addToFavourite = async (movieId, userId) => {
    try {
      const res = await this.service.post("/movies/private/favorite", {movieId, userId});
      console.log('AÑADIDO A FAVORITO', res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteFavourite = async (movieId, userId) => {
    try {
      const res = await this.service.post(`/movies/private/favorite/delete/${userId}`, {movieId});
      console.log(res.data, "ELIMINADO")
      return res.data;
    } catch (error) {
      console.log(error, "Error borrando de Favoritos, comprueba tu código");
    }
  };

  getFeed = async () => {
    try {
      const res = await this.service.get(`/movies/feed`);
      console.log(res, "AQUIIII");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addToFeed = async (movieId, userId) => {
    try {
      const res = await this.service.post(`/movies/feed/share`, {movieId, userId});
      console.log('AÑADIDO A FEED?', res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteFromFeed = async (id) => {
    try {
      const res = await this.service.post(`/movies/feed/delete/${id}`);
      console.log(res.data);
      console.log(res, "ELIMINADO?¿?¿?")
      return res.data;
    } catch (error) {
      console.log(error, "Error borrando de Feed, comprueba tu código");
    }
  };

  //MÉTODOS SERVICE DE CARROUSELS
  getCarrouselMovies = async () => {
    try {
      const res = await this.service.get("/movies/carrousel");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };


  getCarrouselMovies2 = async () => {
    try {
      const res = await this.service.get("/movies/carrousel2");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getCarrouselMovies3 = async () => {
    try {
      const res = await this.service.get("/movies/carrousel3");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };


  //tmdb api
  getTmdbApi = async (query, changer) => {
    try {
      const res = await this.service.get(`https://api.themoviedb.org/3/trending/${changer}/${query}?api_key=7ce566a9d36bbc6542be89e8fee7397a`);
      console.log(res, "service!!!")
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //tmdb api 2
  getTmdbApi2 = async () => {
    try{
      const movies = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=7ce566a9d36bbc6542be89e8fee7397a&language=en-US&page=1`)
      console.log(movies.data.results, "MOVIES!!!")
      return movies.data.results;
    }catch(error){
      console.log(error);
    }
  };


}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;