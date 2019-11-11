import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import samplePacksReducer from "./sample_pack_reducer";
import samplesReducer from "./samples_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  samplePacks: samplePacksReducer,
  samples: samplesReducer
});

export default entitiesReducer;