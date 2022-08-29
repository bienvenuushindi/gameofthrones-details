import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import statesReducer from './states/reducer';

const rootReducer = combineReducers({ states: statesReducer });
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
