import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import samplePacksReducer from "./sample_pack_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  samplePacks: samplePacksReducer
});

export default entitiesReducer;