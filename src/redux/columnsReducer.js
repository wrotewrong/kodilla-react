// actions
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// selectors

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

// action creators
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

export const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  }
};
