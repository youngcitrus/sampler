import React from "react";
import Sample from './samples/sample';

class LikedSamples extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.requestLikedSamples();
    }

    render() {

        if (Object.keys(this.props.samplePacks).length < 1 || !this.props.likedSamples) {

            return null;

        } else {
            return (
                <div className="liked-samples-container"> 
                    { this.props.likedSamples.map( sample => {
                        
                        return (<Sample key={sample.id} sample={sample} pack={this.props.samplePacks[sample.pack_id]} userId={this.props.userId}/>)
                    }, this)}
                    
                </div>
            )
        }
    }
};

export default LikedSamples;