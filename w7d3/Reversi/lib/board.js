let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const board = Array.from( 
    {length: 8 }, // columns
    () => Array.from({length: 8})
  );

  board[3][4] = new Piece("black");
  board[4][3] = new Piece("black");
  board[3][3] = new Piece("white");
  board[4][4] = new Piece("white");
  return board;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    throw new Error("position is invalid");
  }
  
  let x = pos[0];
  let y = pos[1];
  return this.grid[x][y];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return validMoves(color).length > 0;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  return this.getPiece(pos).color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let x = pos[0];
  let y = pos[1];
  return this.grid[x][y] !== undefined; 
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return !this.hasMove("black") && !this.hasMove("white");
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8);
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */

// dir - [0, 1]
// piecesToFlip - [array of piece positions]
// return value - [positions?] Board.getPiece?, then Piece.flip

function _positionsToFlip (board, pos, color, dir, piecesToFlip = []) { //pos-> [1, 1]
  
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
  if (!board.isValidPos(nextPos)) { //if it's valid
    return null;
  } else if (!board.isOccupied(nextPos)) { //if it's empty
    return null;
  } else if (board.isMine(pos, color)) { //hit our own color?
    return null;
  } else {
    piecesToFlip.push(nextPos);
    return _positionsToFlip(board, nextPos, color, dir, piecesToFlip);
  }

  // 1. check nulls
  // 2. base case: if it's a valid pos, if we hit our own color and piecesToFlip are not empty?
  // 3. iterative step: pass in a new starting pos, and piecesToFlip array as a recursive call
  // })
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color)) {
    throw new Error("Invalid move!");
  }
  let x = pos[0];
  let y = pos[1];
  this.grid[x][y] = new Piece(color);

  Board.DIRS.forEach(function(direction) {
    let positions = _positionsToFlip(this, pos, color, direction);
    positions.forEach(function(position) {
      let piece = this.getPiece(position);
      piece.flip();
    });
  });

};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {

};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let validPositions = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this.getPiece([i, j]).color === color ) {
        validPositions.push([i, j]);
      }
    }
  }
  return validPositions;
};

module.exports = Board;


// Testing:
let reversi = new Board();
console.log(reversi);
// console.log(reversi.getPiece([-3, 4]));