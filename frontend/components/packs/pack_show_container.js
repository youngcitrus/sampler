import { connect } from 'react-redux';
import {requestPack, requestSamples} from '../../actions/sample_actions'
import PackShow from './pack_show';

const mapStateToProps = ({entities}) => ({
   pack: (Object.values(entities.samplePacks))[0],
   samples: Object.values(entities.samples)
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    requestPack: () => dispatch(requestPack(ownProps.match.params.packId)),
    requestSamples: () => dispatch(requestSamples(ownProps.match.params.packId)),
    redirectToRoot: () => ownProps.history.push('/')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PackShow)