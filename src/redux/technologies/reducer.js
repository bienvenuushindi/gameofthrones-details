import { FETCH_FULFILLED } from './actions';

const technologies = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_FULFILLED: {
      return action.payload.data;
    }
    default: return state;
  }
};

export default technologies;
