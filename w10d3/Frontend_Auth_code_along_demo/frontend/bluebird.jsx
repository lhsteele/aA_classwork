import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // this is to make sure we have a variable we can use 
  let preloadedState = undefined;
  // if window.currentUser (from application.html) is a valid JS object
  // then that JS object should become the current user in the preloaded state
  // preloaded state, because it mimics the shape of our state, will replace the state if
  // if currentUser is defined on the window
  // in the session reducer, it's being passed this object and using that instead of the 
  // default _nullSession state
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  // const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
})