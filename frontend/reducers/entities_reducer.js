import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import samplePacksReducer from "./sample_pack_reducer";
import samplesReducer from "./samples_reducer";
import likedSamplesReducer from "./liked_samples_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  samplePacks: samplePacksReducer,
  samples: samplesReducer,
  likedSamples: likedSamplesReducer
});

export default entitiesReducer;