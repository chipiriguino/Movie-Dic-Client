import React, { Component } from 'react';
import service from '../api/service';
import {Button} from 'react-bootstrap';

class Feed extends Component {
    state = {
        feed: []
    }

    getFeed = async () => {
        let res = await service.getFeed();
        this.setState({ feed: res })
    }

    deleteFromFeed = async (id) => {
        await service.deleteFromFeed(id);
        this.getFeed();
    }

    componentDidMount = () => {
        this.getFeed();
    };

    render() {
        const {feed}  = this.state
        console.log(feed, "CONSOLE LOG FEED.JS")
        return (
            <div className="feed-container">
                <div className="feed-section">
					<h1>Social feed</h1>
					<h3>See what users have shared!</h3>
				</div>
                {feed?.map((feed, index) => {
                    return (
                        <div className="f-card" key={feed._id}>
                            <div className="header">
                                <div className="options"><i className="fa fa-chevron-down"></i></div>
                                <img className="co-logo" src={feed.user.image} alt={feed.user.image}/>
                                    <div className="co-name">
                                        <a href={feed.user}>{feed.user.username}</a>
                                    </div>
                                <div className="time">
                                    <Button >{Date((feed.updated_at))}</Button> · <i className="fa fa-globe"></i>
                                </div>
                            </div>
                            <div className="content">
                                <p>{feed.user.username} ha compartido la película <b>{feed.movie.movie_title}</b><a href={`/details/${feed.movie._id}`}>See More</a></p>
                            </div>

                            <div className="reference">
                                <img className="reference-thumb" src={feed.movie.fan_art} alt={feed.movie.movie_title} />
                                <div className="reference-content">
                                    <div className="reference-title">{feed.movie.movie_title}</div>
                                    <div className="reference-subtitle2">{feed.movie.description}</div>
                                </div>
                            </div>
                            <div className="social">
                                <div className="social-content"></div>
                                <div className="social-buttons">
                                    <span><i className="fa fa-thumbs-up"></i>Like</span>
                                    <span><i className="fa fa-comment"></i>Comment</span>
                                    <span><Button onClick={() => this.deleteFromFeed(feed._id)} className="primary" variant="primary" size="sm" active>Delete</Button></span>
                                    <span><i className="fa fa-share"></i>Share</span></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Feed;