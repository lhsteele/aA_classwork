import React from 'react';
import ReactDOM from 'react-dom';

import * as Minesweeper from '../src/minesweeper';

import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.board = new Minesweeper.Board(9, 9);
    this.state = { board: this.board };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    //trigger a state change in the game class, which will re-render the game
    //class and in turn re-render all the tiles

    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  gameOver() {
    if (this.state.board.lost()) {

    }
  }

  render() {   
    return (
      <div className="board">
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}

export default Game;