import React from "react";

import SinglePack from './single_pack'
class DisplayPacks extends React.Component{
    componentDidMount(){
        this.props.requestAllPacks();
    }
    render(){
        if (!this.props.samplePacks) {
            return null;
        } else {
            return (
                <div>
                    {this.props.samplePacks.map( (pack, i)=> <SinglePack key={pack.id} pack={pack}/>)}
                </div>

            );
        }
        
    }
}

export default DisplayPacks;