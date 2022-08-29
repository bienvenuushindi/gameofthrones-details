import { FETCH_STATES_FULFILLED } from './actions';

const statesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_STATES_FULFILLED: {
      return state;
    }
    default: return state;
  }
};

export default statesReducer;
