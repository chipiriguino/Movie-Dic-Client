import React, { Component } from 'react';

class SearchResult extends Component {
    render() {
        console.log('THIS.PROPS SERACH RESULTS', this.props)
        return (
            <div>
                <h3>{this.props.theMovie.movie_title}</h3>
                <img src={this.props.theMovie.poster} alt={this.props.theMovie.movie_title} />
            </div>
        );
    }
}

export default SearchResult;