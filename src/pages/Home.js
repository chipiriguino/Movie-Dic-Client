import React from 'react'
import { Link} from "react-router-dom";
import Carrousel from '../components/Carrousel';
function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <Carrousel />
    </div>
  )
}

export default Home;