export const SEARCH_ITEM = 'SEARCH_ITEM';

export const CATEGORIES = category => ({
  type: 'CATEGORY', category
});

export const MEALS = meal => ({
  type: 'MEAL', meal
});

export const SEARCH = item => ({
  type: SEARCH_ITEM, item
});

export default CATEGORIES;
