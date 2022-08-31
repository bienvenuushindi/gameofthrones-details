import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import units from './units/reducer';
import civilizations from './civilizations/reducer';
import technologies from './technologies/reducer';
import structures from './structures/reducer';

const rootReducer = combineReducers({
  units, civilizations, technologies, structures,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
}, applyMiddleware(thunk));
export default store;
