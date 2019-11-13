import { connect } from 'react-redux';
import NavBarShow from './navbar_show';
import {logoutUser} from '../actions/session_actions';

const mapStateToProps = ({ entities, session }) => {
  return{
    user: entities.users[session.id]
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      logoutUser: () => dispatch(logoutUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarShow);