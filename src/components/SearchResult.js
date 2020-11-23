import React, { Component } from 'react';

class SearchResult extends Component {
    render() {
        return (
            <div className="align-random">
                <a href={`/details/${this.props.theMovie._id}`}>
                <div className="cover-movie" style={{backgroundImage: `url(${this.props.theMovie.poster})`}}>
                    {/* <img src={this.props.theMovie.poster} alt={this.props.theMovie.movie_title} /> */}
                    {/* <h5 className="align-txt-random">{this.props.theMovie.movie_title}</h5> */}
                </div>
                </a>  
            </div>
        );
    }
}

export default SearchResult;