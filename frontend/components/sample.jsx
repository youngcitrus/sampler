import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class SampleTest extends React.Component{
    
    componentDidMount(){
        const Spectrum = WaveSurfer.create({
            container: '#audio-container',
            backend: 'MediaElement'
        });
        Spectrum.load('https://drive.google.com/file/d/1Q26ywAp573dPmiBbx2la-HQVNbTcLSVe/view?usp=sharing');
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