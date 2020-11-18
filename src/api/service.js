import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      // withCredentials: true
    });
  }

  apiKeyString = "?api_key=7ce566a9d36bbc6542be89e8fee7397a"

  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  saveNewMovie = async (newMovie) => {
    console.log("new thing is: ", newMovie);

    try {
      const res = await this.service.post("/movies/create", newMovie);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getTopRated = async () => {
    try {
      const res = await this.service.get("/tv/top_rated/" + this.apiKeyString);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getMostPopular = async () => {
    try {
      const res = await this.service.get("/movie/popular/" + this.apiKeyString);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  getUpcoming = async () => {
    try {
      const res = await this.service.get("/movie/upcoming" + this.apiKeyString);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

}


const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;