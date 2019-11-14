import { connect } from 'react-redux';
import {requestPack, requestSamples} from '../../actions/sample_actions'
import PackShow from './pack_show';

const mapStateToProps = ({entities}, ownProps) => {
//    debugger 
   return{
//    pack: (Object.values(entities.samplePacks))[0],
    pack: entities.samplePacks[ownProps.match.params.packId],
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