import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class Sample extends React.Component{
    
    constructor(props){
        super(props);
        this.waveform = React.createRef();
    }

    componentDidMount(){
        const wavesurfer = WaveSurfer.create({
            container: this.waveform.current,
            progressColor: '#3134FF',
            cursorWidth: 0,
            height: 30,
            barWidth: 2,
            barGap: 0,
            normalize: 1,
            backend: 'MediaElement'
        });

        const playButton = document.getElementById(this.props.sample.name);

        playButton.addEventListener("click", () => {
            if (playButton.getAttribute('playing') === 'false'){
                wavesurfer.play();
                playButton.setAttribute('playing', 'true');
            } else if (playButton.getAttribute('playing') === 'true' ){
                wavesurfer.pause();
                playButton.setAttribute('playing', 'false');
            }
        }, false);

        wavesurfer.on('ready', ()=>{
            playButton.disabled = false;
        });

        wavesurfer.on('finish', ()=>{
            playButton.setAttribute('playing', 'false');
        });

        wavesurfer.load(this.props.sample.fileUrl);
    }

    render(){
        return (
            <div>
                {this.props.sample.name}
                <div className='audio-player'>
                    <div id={this.props.sample.name} className='btn-play' disabled="disabled" playing="false"/>
                    <div ref={this.waveform} className='audio-container'></div> 
                 </div>
            </div>
        );
    }   
}

export default Sample;