import React from 'react';
import * as PackLikeUtil from "../../util/pack_like_util";

class PackLike extends React.Component{
    constructor(props){
        super(props);
        // debugger;
        this.packLike = { user_id: props.userId, pack_id: props.pack.id } 
        this.state = {liked: props.pack.liked}
    }



    render(){
        
        return (
            <div onClick={() => PackLikeUtil.likePack(this.packLike)}> Click me </div>
        )
    }
}

export default PackLike;