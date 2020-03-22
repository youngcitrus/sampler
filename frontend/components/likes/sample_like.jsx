import React from 'react';
import * as SampleLikeUtil from "../../util/sample_like_util";

class SampleLike extends React.Component {
    constructor(props) {
        super(props);
        this.sampleLike = { user_id: props.userId, sample_id: props.sample.id }
        this.state = { liked: props.sample.liked };
        this.handleClick = this.handleClick.bind(this);
        debugger;
    }

    handleClick() {
        if (this.state.liked){
            SampleLikeUtil.unlikeSample(this.sampleLike);
            this.setState({liked: false});
            debugger;
            if (this.props.page === "home") this.props.refresh();
        } else {
            SampleLikeUtil.likeSample(this.sampleLike);
            this.setState({liked: true});
        }
    }

    render() {
        const likeButton = () => (
            <div onClick={this.handleClick}>
                <i className="far fa-heart"></i>
            </div>
        );

        const unlikeButton = () => (
            <div onClick={this.handleClick}>
                <i className="far fa-heart" id="temp-heart"></i>
                <i className="fas fa-heart" id="liked-heart-grey"></i>
            </div>
        );

        return this.state.liked ? unlikeButton() : likeButton();
    }
    
}

export default SampleLike;