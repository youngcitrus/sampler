import React from "react";
import Sample from './samples/sample';
import NavBarShowContainer from './navbar_show_container';

class LikedSamples extends React.Component{
    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
        this.refresh = false;
    }

    componentDidMount(){
        this.props.requestAllPacks();
        this.props.requestLikedSamples();
    }


    rerenderParentCallback(){
        this.props.requestLikedSamples();
    }

    render() {
        if (Object.keys(this.props.samplePacks).length <= 1 || !this.props.likedSamples) {

            return null;

        } else {
            return (
                <div className="liked-samples-container">
                    <NavBarShowContainer redirect={this.props.redirectToRoot}/>
                    <div className='pack-show'>
                        <div className='pack-banner'>
                            <img src="https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/cover-art/favorites-cover.png" className='cover-art'/>
                            <img src="https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/cover-art/favorites-cover.png" className='cover-art-background'/>
                            <div className='pack-info'>
                                <h2>My Favorites</h2>
                                <p>All of your favorite samples - in one place.</p>
                            </div>

                            <div className='darken'></div>
                        </div>
                        <div className='sample-preheader'>
                            {this.props.likedSamples.length} Samples
                        </div>
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
                                
                                return (<Sample key={sample.id} sample={sample} pack={this.props.samplePacks[sample.pack_id]} userId={this.props.userId} refresh={this.rerenderParentCallback} page="favorites"/>)
                            }, this)}
                            
                        </div>
                    </div>
                </div>
            )
        }
    }
};


export default LikedSamples;