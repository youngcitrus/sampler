import { connect } from 'react-redux';
import LikedSamples from './liked_samples';
import { requestLikedSamples } from '../actions/sample_actions';

const mapStateToProps = ({entities}) => {
    return {
        userId: parseInt(Object.keys(entities.users)[0]),
        likedSamples: Object.values(entities.likedSamples),
        samplePacks: entities.samplePacks
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestLikedSamples: () => dispatch(requestLikedSamples())
})

export default connect(mapStateToProps, mapDispatchToProps)(LikedSamples);
