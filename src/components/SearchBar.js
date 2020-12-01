import React, { Component } from 'react'

class SearchBar extends Component {

    handleChange = (event) => {
        let { value } = event.target
        if(value){
            this.props.filterSearch(value)
        }else{
            this.props.clearSearch()
        }
    }

    render(){
        return(
            <div className="search-div">
                <input type="text" name="name" onChange={(e) => this.handleChange(e)} placeholder="Search Movie..."></input>
            </div>
            
        )
    }
    
}

export default SearchBar;  
