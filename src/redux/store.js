import { legacy_createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({ cards, searchCardTitle }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchCardTitle)
  );

export const getAllColumns = ({ columns }) => columns;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const searchCard = (payload) => ({ type: 'SEARCH_CARD', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case 'SEARCH_CARD':
      return {
        ...state,
        searchCardTitle: action.payload,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
