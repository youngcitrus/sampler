# Sampler
[Sampler site](https://music-samplr.herokuapp.com)

`Sampler` is an online e-commerce site where users can browse, stream, and download original audio samples created by independent musicians. The mission of this project is allow users and creators to use audio samples for their own creative projects (ie, music, film, and videos).

## Technology used:
* React/Redux for frontend rendering
* Ruby on Rails for backend MVC framework and API routing
* PostgreSQL and AWS for database
* Wavesurfer.js and HTML5 Audio for generating audio waveform players

## Features

## Large Library of Samples
![screenshot](https://sampler-pro.s3-us-west-1.amazonaws.com/Screenshots/sampler-screenshot-2.jpg)
Samples are organized into sample packs, each with their own genre and style for any kind of project users may be interested in

## User Authentication and Login

## Likes

## Code Snippets

Every sample belongs to a parent Sample Pack, which is displayed as a React component that fetches each of its samples from our database.

```
export const fetchSamples = packId => {
    return $.ajax({
        method: 'GET',
        url: `api/sample_packs/${packId}/samples`
    })
};
```
```
componentDidMount(){

        this.props.requestPack(this.props.match.params.packId)
            .fail( (error)=> this.props.history.push('/'));
        this.props.requestSamples(this.props.match.params.packId)
            .fail( (error)=> this.props.history.push('/'));
}
```

Each sample is rendered as a React component that displays a record in our databased linked to an audio file stored in AWS. React refs are used to create a reference to render our waveform audio player. Simple Javascript is used to handle our audio player logic.
```
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
```

Liking samples and sample packs are handled by AJAX requests which link users to samples by creating 'like' objects in the backend.
```
export const likeSample = (sampleLike) => {
    return $.ajax({
        method: 'POST',
        url: 'api/sample_likes',
        data: { sample_like: sampleLike }
    });
};

export const unlikeSample = (sampleLike) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/sample_likes/',
        data: { sample_like: sampleLike }
    });
}
```
These functions are invoked when clicking on a heart icon next to an individual sample.
```
handleClick() {
    if (this.state.liked){
        SampleLikeUtil.unlikeSample(this.sampleLike)
            .then(()=>{
                if (this.props.page === "favorites") this.props.refresh();
                this.setState({liked: false});
            });
    } else {
        SampleLikeUtil.likeSample(this.sampleLike);
        this.setState({liked: true});
    }
}
```
