// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// selectors
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getAllLists = ({ lists }) => lists;

// action creators
export const addList = (payload) => ({ type: ADD_LIST, payload });

export const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  }
};
