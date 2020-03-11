import { connect } from 'react-redux';
import LikedSamples from './liked_samples';

const mapStateToProps = ({entities}) => {
    return {
        userId: parseInt(Object.keys(entities.users)[0]),
        likedSamples: entities.users[Object.keys(entities.users)[0]].liked_samples,
        samplePacks: entities.samplePacks
    }
};

export default connect(mapStateToProps)(LikedSamples);
