import React from "react";
import Sample from './samples/sample';

class LikedSamples extends React.Component{
    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    }

    componentDidMount(){
        this.props.requestAllPacks();
        this.props.requestLikedSamples();
    }

    rerenderParentCallback(){
        this.forceUpdate();
    }

    render() {

        if (Object.keys(this.props.samplePacks).length <= 1 || !this.props.likedSamples) {

            return null;

        } else {
            return (
                <div className="liked-samples-container">
                    <div className='sample-headers'>
                        <div className='sh-pack-filename'>
                            <div className='sh-pack'>Pack</div>
                            <div className='sh-filename'>Filename</div>
                        </div>
                        <div className='sh-info'>
                            <div className='sh-key'>Key</div>
                            <div className='sh-bpm'>BPM</div>
                            <div className='sh-like'>Like</div>
                            <div className='sh-cart'>Download</div>
                        </div>
                    </div>
                    <div className="liked-samples"> 
                        { this.props.likedSamples.map( sample => {
                            
                            return (<Sample key={sample.id} sample={sample} pack={this.props.samplePacks[sample.pack_id]} userId={this.props.userId} refresh={this.rerenderParentCallback} page="home"/>)
                        }, this)}
                        
                    </div>
                </div>
            )
        }
    }
};

export default LikedSamples;