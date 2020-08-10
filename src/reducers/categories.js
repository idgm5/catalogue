import { CATEGORIES, MEALS } from '../actions/index';

function categories(state = [], action) {
  switch (action.type) {
    case CATEGORIES:
      return state;
    case MEALS:
      return state;
    default:
      return state;
  }
}

export default categories;
