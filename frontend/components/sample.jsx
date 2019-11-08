import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class SampleTest extends React.Component{
    
    componentDidMount(){
        const waveform = WaveSurfer.create({
            container: '#audio-container',
            backend: 'MediaElement',
            progressColor: '#03a9f4',
            cursorWidth: 0,
            height: 30,
            barWidth: 3,
            barGap: 0,
            normalize: 1,
            backend: 'MediaElement'
        });

        const buttons = { 
            play: document.getElementById('btn-play'),
            pause: document.getElementById('btn-pause'),
            stop: document.getElementById('btn-stop')
        }

        buttons.play.addEventListener("click", () => {
            waveform.play();
            buttons.stop.disabled = false;
            buttons.pause.disabled = false;
            buttons.play.disabled = true;
        }, false);

        buttons.pause.addEventListener("click", () => {
            waveform.pause();
            buttons.pause.disabled = true;
            buttons.play.disabled = false;
        }, false);

        buttons.stop.addEventListener("click", () => {
            waveform.stop();
            buttons.pause.disabled = true;
            buttons.play.disabled = false;
            buttons.stop.disabled = true;
        }, false);

        waveform.on('ready', ()=>{
            buttons.play.disabled = false;
        });

        waveform.on('finish', ()=>{
            buttons.play.disabled = false;
        });

        waveform.load("http://localhost:8080/samples/guitar_picked_chord.mp3");
    }

    render (){

        return(
            <div>
                <div id='audio-container'></div>
                <div className="buttons">
                    <input type="button" id="btn-play" value="Play"/>
                    <input type="button" id="btn-pause" value="Pause" disabled="disabled"/>
                    <input type="button" id="btn-stop" value="Stop" disabled="disabled"/>
                </div>
                <p>Testing</p>
            </div>
        )
    }
};

export default SampleTest;