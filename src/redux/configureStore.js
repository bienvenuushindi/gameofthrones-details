import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import characters from './characters/reducer';
import houses from './houses/reducer';

const rootReducer = combineReducers({
  characters, houses,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
}, applyMiddleware(thunk));
export default store;
