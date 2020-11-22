import React from 'react'
import { Link} from "react-router-dom";
import Carrousel from '../components/Carrousel';
function Home() {
  return (
    <div className="carusel"> 
      <div id="slider">
        <h2>Top rated</h2>
	<input type="radio" name="slider" id="slide1" checked />
	<input type="radio" name="slider" id="slide2" />
	<input type="radio" name="slider" id="slide3" />
	<input type="radio" name="slider" id="slide4" />
	<input type="radio" name="slider" id="slide5" />
	
	
	<div class="slides">
		<div class="overflow">
			<div class="inner">
				<div class="slide">
					<div class="info"><h3>TERMINATOR</h3> by <a href="/movies">see more</a></div>
					<img src="https://newcinema.es/imagenes/2019/09/terminator-destino-oscuro-poster-final-imagen-750x400.jpg" />
				</div>
				<div class="slide">
					<div class="info"><h3>ALONE IN HOUSE</h3> by <a href="/movies">see more</a></div>
					<img src="http://cdn30.us1.fansshare.com/image/gangstersquad/gangster-squad-movie-poster-horizontal-movies-2107467303.jpg" />
				</div>
				<div class="slide">
					<div class="info"><h3>Mountain Outpost</h3> by <a href="http://voyager3.tumblr.com">see more</a></div>
					<img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" />
				</div>
				<div class="slide">
					<div class="info"><h3>Cliffs</h3> by <a href="/movies">see more</a></div>
					<img src="http://cdn30.us1.fansshare.com/image/gangstersquad/gangster-squad-movie-poster-horizontal-movies-2107467303.jpg" />
				</div>
				<div class="slide">
					<div class="info"><h3>RAMBO</h3> by <a href="/movies">see more</a></div>
					<img src= "https://lascronicasdeaxa.files.wordpress.com/2020/01/rambo-5_2019_banner.jpg" />
				</div>
			</div> 
		</div> 
	</div> 


	<div id="controls">
		<label for="slide1"></label>
		<label for="slide2"></label>
		<label for="slide3"></label>
		<label for="slide4"></label>
		<label for="slide5"></label>
	
	
	{/* <div id="active">
		<label for="slide1"></label>
		<label for="slide2"></label>
		<label for="slide3"></label>
		<label for="slide4"></label>
		<label for="slide5"></label>	
	</div>  */}
</div> 
    </div>
    </div>
  )
}

export default Home;