import React from 'react';
import SampleLike from '../likes/sample_like';
import WaveSurfer from 'wavesurfer.js';

class Sample extends React.Component{
    
    constructor(props){
        super(props);
        this.download = this.download.bind(this);
        this.waveform = React.createRef();
    }

    componentDidMount(){
        const wavesurfer = WaveSurfer.create({
            container: this.waveform.current,
            progressColor: '#3134FF',
            cursorWidth: 0,
            height: 30,
            barWidth: 1.2,
            barGap: 0,
            barMinHeight: 1.5,
            normalize: 0,
            backend: 'MediaElement'
        });

        const playButton = document.getElementById(this.props.sample.name);

        playButton.addEventListener("click", () => {
            if (playButton.getAttribute('playing') === 'false'){
                wavesurfer.play();
                playButton.setAttribute('playing', 'true');
                playButton.classList.remove('btn-play');
                playButton.classList.add('btn-pause');
            } else if (playButton.getAttribute('playing') === 'true' ){
                wavesurfer.pause();
                playButton.setAttribute('playing', 'false');
                playButton.classList.remove('btn-pause');
                playButton.classList.add('btn-play');
            }
        }, false);

        wavesurfer.on('ready', ()=>{
            playButton.disabled = false;
        });

        wavesurfer.on('finish', ()=>{
            playButton.setAttribute('playing', 'false');
            playButton.classList.remove('btn-pause');
            playButton.classList.add('btn-play');
        });
        wavesurfer.load(this.props.sample.fileUrl);
    }

    download(){
        const link = document.createElement('a');
        link.href = this.props.sample.fileUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render(){
        // debugger;
        return (
            <div>
                <div className='sample-row'>
                    <div className='parent-pack-icon'><img src={this.props.pack.fileUrls[0]}/></div>
                    <div className='audio-player'>
                        <div id={this.props.sample.name} className='btn-play' disabled="disabled" playing="false"/>
                        <div ref={this.waveform} className='audio-container'></div>
                    </div>
                    <div className='sample-name'>{this.props.sample.name}</div>
                    <div className='sample-info'>
                        <div className='sample-key-container'>
                            <div className='sample-key'>{this.props.sample.key}</div>
                        </div>
                        <div className='sample-bpm-container'>
                            <div className='sample-bpm'>{this.props.sample.bpm}</div>
                        </div>
                        <div className='heart-icon-container'>
                            <SampleLike userId={this.props.userId} sample={this.props.sample} page={this.props.page} refresh={this.props.refresh}/>
                        </div>
                        <div className='cart-icon-container'>
                            <div className='cart-icon' onClick={this.download}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Sample;