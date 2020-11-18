import React, { Component } from 'react';
import service from '../api/service';

class MostPopular extends Component {
    state = {
        movies: [],
        poster_path: "",
        original_title: ""
      }
    render() {
        console.log('THIIIIIIIIIIIIISSSSS', this)
        console.log('MOSTPOPULAR FUNCTION 1---this.state.poster_path', service.poster_path)
        console.log('MOSTPOPULAR FUNCTION 2---', service.original_title)
        return (
            <div>
                <img alt="photosid">{this.poster_path}</img>
                <h2>Title: {this.original_title}</h2>
            </div>
        );
    }
}

export default MostPopular;