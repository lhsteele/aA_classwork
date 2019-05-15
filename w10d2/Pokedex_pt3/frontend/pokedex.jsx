import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

import { receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions";
import { fetchAllPokemon } from "./util/api_util";
import configureStore from "./store/store";
import { selectAllPokemon } from "./reducers/selectors";
import pokemonIndexContainer from './components/pokemon/pokemon_index_container'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});

// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
// window.selectAllPokemon = selectAllPokemon;
// window.pokemonIndexContainer = pokemonIndexContainer;
