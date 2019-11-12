import React from 'react';
import Sample from '../samples/sample';

class PackShow extends React.Component{
    componentDidMount(){
        this.props.requestPack();
        this.props.requestSamples();
    }

    render(){
        if (!this.props.pack || !this.props.samples) {
            return null;
        } else {
            return (
                <div>
                    <div>{this.props.pack.name}</div>
                    <div>
                        {this.props.samples.map( sample => (<Sample key={sample.id} sample={sample}/>) )}
                    </div>
                </div>
                )
            }
    }   
}

export default PackShow;