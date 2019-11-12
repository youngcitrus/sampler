import React from 'react';
import Sample from '../samples/sample';
import NavBarContainer from '../navbar_container';

class PackShow extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.requestPack();
        this.props.requestSamples();
    }

    render(){
        if (!this.props.pack || !this.props.samples) {
            return null;
        } else {
            return (
                <div className='pack-show-container'>
                    <NavBarContainer redirect={this.props.redirectToRoot}/>
                    <div className='pack-show'>
                        <div className='pack-banner'>
                            <img src={this.props.pack.fileUrls[0]} className='cover-art'/>
                            <img src={this.props.pack.fileUrls[0]} className='cover-art-background'/>
                            
                            <div className='pack-info'>
                                <h2>{this.props.pack.name}</h2>
                                <p>{this.props.pack.description}</p>
                                <div className='play-demo' >Play Demo</div>
                            </div>
                            <div className='darken'></div>
                            
                        </div>
                        <div className='sample-preheader'>
                            {this.props.samples.length} Samples
                        </div>
                        <div className='sample-headers'>
                            <div className='sh-pack'>Pack</div>
                            <div className='sh-filename'>Filename</div>
                            <div className='sh-key'>Key</div>
                            <div className='sh-bpm'>BPM</div>
                            <div className='sh-like'>Like</div>
                            <div className='sh-cart'>Add to Cart</div>
                        </div>
                        <div className='samples-container'>
                            {this.props.samples.map( sample => (<Sample key={sample.id} sample={sample} pack={this.props.pack}/>) )}
                        </div>
                    </div>
                </div>
            )
        }
    }   
}

export default PackShow;