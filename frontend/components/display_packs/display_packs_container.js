import { connect } from 'react-redux';
import DisplayPacks from './display_packs';
import { requestAllPacks } from "../../actions/sample_actions";

const mapStateToProps = ({ entities }) => ({
  samplePacks: Object.values(entities.samplePacks)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllPacks: ()=>dispatch(requestAllPacks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPacks)