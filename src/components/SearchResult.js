import React, { Component } from 'react';

class SearchResult extends Component {
    render() {
        console.log('THIS.PROPS SERACH RESULTS', this.props)
        return (
            <div className="align-random">
                <img src={this.props.theMovie.poster} alt={this.props.theMovie.movie_title} />
                <h3 className="align-txt-random">{this.props.theMovie.movie_title}</h3>  
            </div>
        );
    }
}

export default SearchResult;