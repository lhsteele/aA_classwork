import React from 'react';
import * as Minesweeper from '../src/minesweeper';

import Tile from './tile';
import Game from './game';


const Root = () => {
  return (
    <div>
      <Game />
    </div>
  )
}

export default Root;  

// root is the parent component -> game -> board -> tile