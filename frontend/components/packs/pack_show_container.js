import { connect } from 'react-redux';
import {requestPack, requestSamples} from '../../actions/sample_actions'
import PackShow from './pack_show';

const mapStateToProps = ({entities}, ownProps) => { 
   return{
    pack: entities.samplePacks[ownProps.match.params.packId],
    userId: parseInt(Object.keys(entities.users)[0]),
    samples: Object.values(entities.samples)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    requestPack: (packId) => dispatch(requestPack(packId)),
    requestSamples: (packId) => dispatch(requestSamples(packId)),
    redirectToRoot: () => ownProps.history.push('/')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackShow)