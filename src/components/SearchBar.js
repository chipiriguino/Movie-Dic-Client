import React, { Component } from 'react'

const SearchBar = (props) =>{
// class SearchBar extends Component {
    // state = {
    //     search: ""
    // }

    let handleChange = (event) => {
        // desestructuramos el name y el value de event.target
        let { value } = event.target
        console.log('EVENT TARGET SERACHBAR JSSSSS', event.target)
        props.filterSearch(value)
    }

    // handleChange = e => {
    //     const { name, value } = e.target;
    
    //     this.setState({[name]: value})
    //     // invocar la función creada en FoodList.js que filtra la lista de comidas según la búsqueda
    //     this.props.filterSearch(value);
    //   }

    //   render() {
        return(
        <div className="search-div">
            <input type="text" name="name" onChange={(e) =>handleChange(e)} placeholder="search"></input>
        </div>
        
    )
    // }
}

export default SearchBar;  

// onChange={this.handleChange}