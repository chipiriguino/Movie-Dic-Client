import React, { Component } from 'react';

class SearchResult extends Component {
    render() {
        return (
            <div className="align-random">
                <a href={`/details/${this.props.theMovie._id}`}>
                <div className="cover-movie" style={{backgroundImage: `url(${this.props.theMovie.poster})`}}></div>
                </a>  
            </div>
        );
    }
}

export default SearchResult;