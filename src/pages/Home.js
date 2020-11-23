import React, {Component} from 'react'
// import { Link} from "react-router-dom";
import Carrousel from '../components/Carrousel';


class Home extends Component {
	// state = {
    //     movies: []
    // }

    // getAllMovies = async () => {
    //     let res = await service.getAllMovies();
	// 	this.setState({ movies: res })
	// 	console.log('QUE VIENE AL ESTADO DE HOME????', this.state.movies)
    // }

    // componentDidMount = () => {
    //     this.getAllMovies();
	// }
	
	render(){
		return (
			<div className="container2">
			  <Carrousel />
			</div>
		)
	}
  	
}

export default Home;