import { RECEIVE_SAMPLES, RECEIVE_ALL_PACKS } from '../actions/sample_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
      case RECEIVE_SAMPLES:
        let newState = Object.assign({}, state)
        return Object.assign(newState, action.samples);
      case RECEIVE_ALL_PACKS:
        return {}
      default:
        return state;
    }
};