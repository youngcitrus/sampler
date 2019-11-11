import { RECEIVE_ALL_PACKS, RECEIVE_PACK } from '../actions/sample_actions';

export default (state = {}, action) => {
    Object.freeze(state);
  
    switch (action.type) {
      case RECEIVE_ALL_PACKS:
        return Object.assign({}, action.packs);
      case RECEIVE_PACK:
        return action.pack;
      default:
        return state;
    }
};