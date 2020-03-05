import React from 'react';
import * as PackLikeUtil from "../../util/pack_like_util";

class PackLike extends React.Component{
    constructor(props){
        super(props);
        this.packLike = { user_id: props.userId, pack_id: props.pack.id };
        this.state = {liked: props.pack.liked};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if (this.state.liked){
            PackLikeUtil.unlikePack(this.packLike);
            this.setState({liked: false});
        } else {
            PackLikeUtil.likePack(this.packLike);
            this.setState({liked: true});
        }
    }


    render(){
        const likeButton = () => (
            <div onClick={this.handleClick}>
                <i className="far fa-heart"></i>
            </div>
        );

        const unlikeButton = () => (
            <div onClick={this.handleClick}>
                <i className="far fa-heart" id="temp-heart"></i>
                <i className="fas fa-heart" id="liked-heart"></i>
            </div>
        )

        return this.state.liked ? unlikeButton() : likeButton();
    }
}

export default PackLike;