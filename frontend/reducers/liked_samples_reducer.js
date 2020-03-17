import { RECEIVE_LIKED_SAMPLES } from '../actions/sample_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LIKED_SAMPLES:
            return Object.assign({}, action.likedSamples);
        default:
            return state;
    }

}