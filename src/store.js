import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducer';

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
