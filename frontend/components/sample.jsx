import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class SampleTest extends React.Component{
    componentDidMount(){
        const waveform = WaveSurfer.create({
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
                waveform.play();
                playButton.setAttribute('playing', 'true');
            } else if (playButton.getAttribute('playing') === 'true' ){
                waveform.pause();
                playButton.setAttribute('playing', 'false');
            }
        }, false);

        waveform.on('ready', ()=>{
            playButton.disabled = false;
        });

        waveform.on('finish', ()=>{
            playButton.setAttribute('playing', 'false');
        });

        waveform.load("http://localhost:8080/samples/guitar_picked_chord_2.mp3");
    }

    render (){

        return(
            <div className='audio-player'>
                <div id="btn-play" disabled="disabled" playing="false"/>
                <div id='audio-container'></div> 
            </div>
        )
    }
};

export default SampleTest;