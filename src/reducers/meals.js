import { CATEGORIES, MEALS, SEARCH_ITEM } from '../actions/index';

function meals(state = [], action) {
  switch (action.type) {
    case CATEGORIES:
      return [
        ...state,
        action.category,
      ];
    case MEALS:
      return state;
    case SEARCH_ITEM:
        if(action.item === null){
          return "Try another ingredient or meal."
        } else {
          return [
            ...state,
            ...action.item,
          ];
        }
    default:
      return state;
  }
}

export default meals;
