import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class SampleTest2 extends React.Component{
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

        const playButton = document.getElementById('btn-play2');

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

        wavesurfer.load("https://sampler-dev.s3-us-west-1.amazonaws.com/guitar_picked_chord_2.mp3");

    }

    render (){

        return(
            <div className='audio-player'>
                <div id="btn-play2" className='btn-play' disabled="disabled" playing="false"/>
                <div ref={this.waveform} className='audio-container'></div> 
            </div>
        )
    }
};

export default SampleTest2;