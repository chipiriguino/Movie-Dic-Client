import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      //withCredentials: true
    });
  }

  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  handleUpload2 = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/upload2", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  saveNewMovie = async (newMovie) => {
    console.log("new thing is: ", newMovie);

    try {
      const res = await this.service.post("/create", newMovie);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  updatedMovie = async (updatedMovie, id) => {
    console.log("updated movie is: ", updatedMovie);

    try {
      const res = await this.service.post("/upload/" + id, {updatedMovie});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getMostPopular = async (pagina= 0) => {
    try {
      const res = await this.service.get(`/popular?page=` + pagina);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getAllMovies = async (pagina= 0) => {
    try {
      const res = await this.service.get(`/allmovies?page=` + pagina );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  searchMovie = async (query) => {
    try {
      const res = await this.service.get("/search?find=" + query);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getDBmovies = async () => {
    try {
      const res = await this.service.get("/movies");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }; 

  getRandom = async () => {
    try {
      const res = await this.service.get("/random");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getDetailsMovie = async (id) => {
    try {
      const res = await this.service.get("/details/"+ id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteMovie = async (id) => {
    try {
      const res = await this.service.post("/delete/"+ id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getProfileUser = async (id) => {
    try {
      const res = await this.service.get("/private");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getFavId = async (id) => {
    try {
      const res = await this.service.get(`/private/favorite/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addToFavourite = async (movieId, userId) => {
    try {
      const res = await this.service.post("/private/favorite", {movieId, userId});
      console.log('AÑADIDO A FAVORITO? CONSOLE LOG RES.DATA DE SERVICE CLIENT', res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getCarrouselMovies = async () => {
    try {
      const res = await this.service.get("/movies/carrousel");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };


getCarrouselMovies2 = async () => {
  try {
    const res = await this.service.get("/movies/carrousel2");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
getCarrouselMovies3 = async () => {
  try {
    const res = await this.service.get("/movies/carrousel3");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;