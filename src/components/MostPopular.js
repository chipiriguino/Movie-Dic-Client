import React, { Component } from 'react';


class MostPopular extends Component {
    
    render() {
        return (
            <div>
                <img alt="photosid">{this.poster_path}</img>
                <h2>Title: {this.original_title}</h2>
            </div>
        );
    }
}

export default MostPopular;