import React, { Component } from 'react';
import service from '../api/service';
import {withAuth} from '../lib/AuthProvider'

class Feed extends Component {
    state = {
        feed: []
    }

    getFeed = async () => {
        let res = await service.getFeed();
        this.setState({ feed: res })
    }

    componentDidMount = () => {
        this.getFeed();
    };
    
    render() {
        console.log(this.state.feed, "FEED STATE FEED.JS")
        return (
            <div className="row__inner">
                {this.state.feed.map(() => {
                    return (
                        <div className="tile" key={this.state.feed._id}>
                            <div className="tile__media">
                                <img className="tile__img" src={this.state.feed.movie_title} alt="" />
                            </div>
                            <div className="tile__title">
                                {/* <a href={`/details/${this.state.feed.movie._id}`}>Details</a> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withAuth(Feed);