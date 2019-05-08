import React from 'react';
import ReactDOM from 'react-dom';

import * as Minesweeper from '../src/minesweeper';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {this.props.board.grid.map((row, i) => {
          
          return (
            <div key={i} className="row">

              {row.map((tile, i) => {
                
                return (
                  <Tile key={i} tile={tile} updateGame={this.props.updateGame}/> 
                )
              })}

            </div>
          )
        })}
      </div>
    )
  }
}

export default Board;