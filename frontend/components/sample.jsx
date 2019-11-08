import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class SampleTest extends React.Component{
    
    componentDidMount(){
        const Spectrum = WaveSurfer.create({
            container: '#audio-container',
            backend: 'MediaElement'
        });
        Spectrum.load('./sample.wav');
    }

    render (){

        return(
            <div>
                <div id='audio-container'></div>
                <p>Testing</p>
            </div>
        )
    }
};

export default SampleTest;