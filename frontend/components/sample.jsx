import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class SampleTest extends React.Component{
    constructor(props){
        super(props);
        this.waveform = React.createRef();
        
    }
    componentDidMount(){
        const wavesurfer = WaveSurfer.create({
            container: '#audio-container',
            backend: 'MediaElement',
            progressColor: '#3134FF',
            cursorWidth: 0,
            height: 30,
            barWidth: 2,
            barGap: 0,
            normalize: 1,
            backend: 'MediaElement'
        });

        const playButton = document.getElementById('btn-play');

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

        wavesurfer.load("http://localhost:8080/samples/fb-vocal-ensemble-b-major.mp3");
    }

    render (){

        return(
            <div ref={this.waveform.current} className='audio-player'>
                <div id="btn-play" disabled="disabled" playing="false"/>
                <div id='audio-container'></div> 
            </div>
        )
    }
};

export default SampleTest;