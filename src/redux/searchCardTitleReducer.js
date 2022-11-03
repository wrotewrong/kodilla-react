// actions
const createActionName = (actionName) => `app/search/${actionName}`;
const SEARCH_CARD = createActionName('SEARCH_CARD');

// action creators
export const searchCard = (payload) => ({ type: SEARCH_CARD, payload });

export const searchCardTitleReducer = (statePart = '', action) => {
  switch (action.type) {
    case SEARCH_CARD:
      return action.payload;
    default:
      return statePart;
  }
};
