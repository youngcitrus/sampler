import { RECEIVE_ERROR, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions'

export default (state=[], action) => {
  Object.freeze(state);
  // let 

  switch (action.type){
    case RECEIVE_ERROR:
      return action.errors; //this is an ajax promise
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}
