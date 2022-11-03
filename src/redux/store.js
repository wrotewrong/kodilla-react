import initialState from './initialState';
import { legacy_createStore, combineReducers } from 'redux';
import { listsReducer } from './listsReducer';
import { columnsReducer } from './columnsReducer';
import { cardsReducer } from './cardsReducer';
import { searchCardTitleReducer } from './searchCardTitleReducer';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchCardTitle: searchCardTitleReducer,
};

const reducer = combineReducers(subreducers);

const store = legacy_createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
