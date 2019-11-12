import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({
  user: entities.users[session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  logoutUser: () => dispatch(logoutUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)