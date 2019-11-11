import { RECEIVE_SAMPLES } from '../actions/sample_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
      case RECEIVE_SAMPLES:
        let newState = Object.assign({}, state)
        return Object.assign(newState, action.samples);
      default:
        return state;
    }
};