import { FETCH_STATE_DETAILS, FETCH_STATES_FULFILLED } from './actions';

const statesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_STATES_FULFILLED: {
      return [...action.payload.data];
    }
    case FETCH_STATE_DETAILS: {
      return [...state.filter((item) => item.state_code === action.id)];
    }
    default: return state;
  }
};

export default statesReducer;
