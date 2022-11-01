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

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

export const getAllLists = ({ lists }) => lists;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const searchCard = (payload) => ({ type: 'SEARCH_CARD', payload });

export const addList = (payload) => ({ type: 'ADD_LIST', payload });

export const toggleFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

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
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
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
