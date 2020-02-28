import React from 'react';
import * as PackLikeUtil from "../../util/pack_like_util";

class PackLike extends React.Component{
    constructor(props){
        super(props);
        // debugger;
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
            <div onClick={this.handleClick}> like pack </div>
        );

        const unlikeButton = () => (
            <div onClick={this.handleClick}> unlike pack </div>
        )

        return this.state.liked ? unlikeButton() : likeButton();
    }
}

export default PackLike;