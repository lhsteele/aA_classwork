import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions";
import { fetchAllPokemon } from "./util/api_util";
import configureStore from "./store/store";
import { selectAllPokemon } from "./reducers/selectors";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(<Root store={store}/>, root);
});