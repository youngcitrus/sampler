import React from 'react';
import Sample from '../samples/sample';
import NavBarShowContainer from '../navbar_show_container';
import PackLike from '../likes/pack_like';


class PackShow extends React.Component{
    constructor(props){
        super(props);
        this.playDemo = this.playDemo.bind(this);
        
    }
    componentDidMount(){

        this.props.requestPack(this.props.match.params.packId)
            .fail( (error)=> this.props.history.push('/'));
        this.props.requestSamples(this.props.match.params.packId)
            .fail( (error)=> this.props.history.push('/'));
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.match.params.packId !== this.props.match.params.packId){
            this.props.requestPack(this.props.match.params.packId)
                .fail( (error)=> {
                    return this.props.history.push('/');
                })
            this.props.requestSamples(this.props.match.params.packId)
                .fail( (error)=> this.props.history.push('/'));
        }
    }

    playDemo(){
        let player = document.getElementById('demo-player');
        if (player.paused) {
            player.play();
            player.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.playing = true;
        } else {
            
            player.pause();
            this.playing = false;
        }
    }

    render(){
        if (!this.props.pack || !this.props.samples) {
            return null;
        } else {
            return (
                <div className='pack-show-container'>
                    <NavBarShowContainer redirect={this.props.redirectToRoot}/>
                    <div className='pack-show'>
                        <div className='pack-banner'>
                            <img src={this.props.pack.fileUrls[0]} className='cover-art'/>
                            <img src={this.props.pack.fileUrls[0]} className='cover-art-background'/>
                            
                            <div className='pack-info'>
                                <h2>{this.props.pack.name}</h2>
                                <p>{this.props.pack.description}</p>
                                <div className='play-demo'>
                                    <div className='play-demo-button'>
                                        <div className='play-demo-text' onClick={this.playDemo}>Play Demo</div>
                                    </div>
                                </div>
                                <div className='pack-like-container'>
                                    <PackLike pack={this.props.pack} userId={this.props.userId}/>
                                </div>

                            </div>

                            <div className='darken'></div>
                            
                        </div>
                        <div className='below-banner'>
                            <div className='sample-and-suggested'>
                                <div className='sample-show-container'>
                                    <div className='sample-preheader'>
                                        {this.props.samples.length} Samples
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
                                    <div className='samples-container'>
                                        {this.props.samples.map( sample => (<Sample key={sample.id} sample={sample} pack={this.props.pack} userId={this.props.userId}/>) )}
                                    </div>
                                    
                                </div>
                                <div className='recommended'>

                                </div>
                            
                            </div>
                            <div className='bottom-audio-player'>
                                <div className='demo-player'>
                                    <audio controls controlsList="nodownload" id='demo-player'>
                                        <source src={this.props.pack.fileUrls[1]} type="audio/mp3"/>
                                    </audio>
                                </div>
                                <img src={this.props.pack.fileUrls[0]} className='demo-player-icon'/>
                                <div className='demo-player-info'>
                                    <p className='demo-pack-name'>{this.props.pack.name}</p>
                                    <p>Sampler Originals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }   
}

export default PackShow;