import React from "react";
import SinglePack from './single_pack';
import FavoritesLink from './favorites_link';

class DisplayPacks extends React.Component{
    componentDidMount(){
        this.props.requestAllPacks();
    }
    render(){
        if (!this.props.samplePacks) {
            return null;
        } else {
            return (
                <div className='display-packs-home-container'>
                    <div className='display-packs-home'>
                        <FavoritesLink/>
                        {this.props.samplePacks.map( (pack, i)=> <SinglePack key={pack.id} pack={pack}/>)}
                    </div>
                </div>

            );
        }
        
    }
}

export default DisplayPacks;