import React, { Component } from 'react';
import service from '../api/service';

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
        const { feed } = this.state
        console.log(feed, "CONSOLE LOG FEED.JS")
        return (
            <div className="feed-container">
                <div className="feed-section">
					<h1>Social feed</h1>
					<h3>See what users have shared!</h3>
				</div>
                {feed.map((feed, index) => {
                    return (
                        <div className="f-card" key={feed._id}>
                            <div className="header">
                                <div className="options"><i className="fa fa-chevron-down"></i></div>
                                <img className="co-logo" src={feed.user.image} />
                    <div className="co-name"><a href="#">{feed.user.username}</a></div>
                                <div className="time"><a href="#">{feed.updated_at}</a> · <i className="fa fa-globe"></i></div>
                            </div>
                            <div className="content">
                                <p>{feed.user.username} ha compartido la película <b>{feed.movie.movie_title}</b><a href={`/details/${feed.movie._id}`}>See More</a></p>
                            </div>

                            <div className="reference">
                                <img className="reference-thumb" src={feed.movie.fan_art} />
                                <div className="reference-content">
                                    <div className="reference-title">A quick and simple image placeholder service. | PLACEHOLDER.it</div>
                                    <div className="reference-subtitle">How does it work? Just put your image size after our URL and you'll get a placeholder.</div>
                                    <div className="reference-font">placeholder.it</div>
                                </div>
                            </div>
                            <div className="social">
                                <div className="social-content"></div>
                                <div className="social-buttons">
                                    <span><i className="fa fa-thumbs-up"></i>Like</span>
                                    <span><i className="fa fa-comment"></i>Comment</span>
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

{/* <div className="tile" key={feed._id}>
    <div className="tile__media">
        <img className="tile__img" src={feed.movie.poster} alt="" />
    </div>
    <div className="tile__title">
        <a href={`/details/${feed.movie._id}`}>Details</a>
    </div>
</div> */}