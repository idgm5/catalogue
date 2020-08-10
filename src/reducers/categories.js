import { CATEGORIES } from '../actions/index';

function categories(state = [], action) {
  switch (action.type) {
    case CATEGORIES:
      return state;
    default:
      return state;
  }
}

export default categories;
