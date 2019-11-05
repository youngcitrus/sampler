import { combineReducers } from "redux";

import errorsReducer from "./errors_reducer";
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;

/* should give us state like:

{
  entities: {
    users: {}
  },
  session: {
    id: null,
  },
  errors: {
    session: []
  }
}

*/