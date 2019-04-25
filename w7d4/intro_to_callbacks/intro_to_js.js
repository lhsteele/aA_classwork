
class Clock {
  constructor() {
    this.date = new Date(Date.now());

    this.hours = this.date.getHours();
    this.mins = this.date.getMinutes();
    this.secs = this.date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let str = `${this.hours}:${this.mins}:${this.secs}`;
    console.log(str);
  }

  _tick() {
    this.secs++;
    if (this.secs === 60){
        this.secs = 0;
        this.mins++;
        if (this.mins === 60){
            this.mins = 0;
            this.hours = this.hours + 1;
        }
    }
    this.printTime();
    
  }
}

// let clock = new Clock();


// const readline = require('readline'); // readline library

// // input and output are taken from the terminal
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0 ){
        reader.question("Please enter a number: ", function(answer){
            let ans = parseInt(answer);
            sum += ans;
            console.log(sum);
            
            addNumbers(sum, --numsLeft, completionCallback);
        });
    } else {
        completionCallback(sum);
        reader.close();
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps){
      console.log("starting sort...");
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
      reader.close();
    }
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is ${el1} greater than ${el2}? `, function (answer){
        if (answer === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
        // reader.close();
    });
    
}

// askIfGreaterThan(1,3, sum => console.log(`You said ${sum}`));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
     outerBubbleSortLoop(madeAnySwaps);
  } else {
      madeAnySwaps = false;
        askIfGreaterThan(arr[i], arr[i + 1], (resultAns) => {
          if (resultAns) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            madeAnySwaps = true;
          }
          console.log(arr);
          innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
        });
  }
}

// absurdBubbleSort([1,2,4,2,3], (arr)=>{
//   console.log(`Sorted array: ${arr}`);
//   console.log("finished sorting");
// });



// innerBubbleSortLoop([3, 2, 1], 0, false);

Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context);
  };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

Function.prototype.myThrottle = function(interval){
  let tooSoon = false;
  return () => {
      if (tooSoon === false) {
        tooSoon = true;
        setTimeout( function(){
          tooSoon = false;
        }, interval);
        this();
      }
  };
  
};


// class Neuron2 {
//   constructor() {
//     this.fire = this.fire.myThrottle(1000);
//   }
  
//   fire() {
//     console.log("Firing!");
//   }
// }

// nu = new Neuron2();
// const interval = setInterval( () =>{
//   nu.fire();
// },10);

Function.prototype.myDebounce = function (interval){
  let id;
  return () => {
    console.log("debouncing");
    let a = this;
    clearTimeout(id);
     id = setTimeout(function() {
        a();
        console.log("Haven't typed for 1000 milli");
      }, interval);
  };
};

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  setTimeout(function() {searchBar.type("w");}, 500);
  setTimeout(function() {searchBar.type("o");},600);
  setTimeout(function() {searchBar.type("r");},700);
  setTimeout(function() {searchBar.type("l");},800);
  setTimeout(function() {searchBar.type("d");},900);
};

searchBar.search = searchBar.search.myDebounce(300);
queryForHelloWorld();
//searchBar.search();