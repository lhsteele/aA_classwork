import React from 'react';
import ReactDOM from 'react-dom';

import * as Minesweeper from '../src/minesweeper';


class Tile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { text: "" }
    this.tileReveal = this.tileReveal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const explored = this.props.tile.explore();
    this.props.updateGame(this.props.tile, explored);
  }

  tileReveal() {
    let adjBombs = this.props.tile.adjacentBombCount();
    if (this.props.tile.explored === true) {
      if (adjBombs > 1) {
        return <button
                className="numBombs"
                onClick={this.handleClick}>
                {adjBombs}
                </button>
      } else if (this.props.tile.bombed === true) {
        return <button 
                className="bombed"
                onClick={this.handleClick}>
                &#128163;
                </button>
      } else if (this.props.tile.flagged === true) {
        return <button 
                className="flagged"
                onClick={this.handleClick}>
                &#9873;
                </button>
      }
    } else {
      return <button onClick={this.handleClick}></button>;
    }
  }

  render() {
    // debugger
    return (
      <div className="tile">
        {this.tileReveal()}
      </div>
    )
  }
}

export default Tile;