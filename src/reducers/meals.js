import { SEARCH_ITEM } from '../actions/index';

function meals(state = [], action) {
  switch (action.type) {
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
