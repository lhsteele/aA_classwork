class Board {
  constructor() {
    this.grid = [...Array(3)].map(e => Array(3).fill("_"));
  }
//   [[00, 01, 02], 
//    [10, 11, 12], 
//    [20, 21, 22]]

  won(mark) {
    //if an array in grid has all X or O
    //if an array in trasposed grid has all X or O
    //left and right row
    let g = this;
    this.grid.forEach(function(element) {
         
      if (g.win(element, mark)) {
         console.log(mark + " won");
      }
    });
    let cols = g.transpose();
    cols.forEach(function(element) {
      if (g.win(element, mark)) {
        console.log(mark + " won");
      }
    });
  }

  transpose() {
    let transposed = [...Array(3)].map(e => Array(3));

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        transposed[j][i] = this.grid[i][j];
      }
    }
    console.log("  TRANSPOSE   ");
    console.log(transposed);
    return transposed;
  }

  win(row, mark){
    return row.every(ele => { return ele === mark; });
  }

  winner() {

  }

  empty(pos) {

  }

  place_mark(pos, mark) {
    let [x,y] = pos;
    this.grid[x][y] = mark;
   }
}

let grid = new Board();
grid.place_mark([0, 0], "O");
grid.place_mark([0, 1], "X");
grid.place_mark([0, 2], "X");
grid.place_mark([1, 0], "O");
grid.place_mark([1, 1], "X");
grid.place_mark([1, 2], "X");
grid.place_mark([2, 0], "O");
grid.place_mark([2, 1], "X");
grid.place_mark([2, 2], "X");

console.log(grid);
 grid.won("O");

// grid.transpose();
//var myGrid = [...Array(6)].map(e => Array(6).fill("_"));

const transpose = function (arr) {
    let transposedArr = [];
    let currRow;
  
    for (var col = 0; col < arr[0].length; col++) {
      transposedRow = [];
      for (var row = 0; row < arr.length; row++) {
        transposedRow.push(arr[row][col]);
      }
      transposedArr.push(transposedRow);
    }
    return transposedArr;
  };
  