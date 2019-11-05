// main reducer which combines all reducers
import { combineReducers } from 'redux';

// add all other reducers to combineReducers
const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
