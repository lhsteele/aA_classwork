import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../components/root';

import Tile from '../components/tile';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});  