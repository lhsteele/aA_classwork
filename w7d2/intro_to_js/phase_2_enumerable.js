Array.prototype.myEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    callback(element);
  }
};

const callBackToMyEach = function (el) {
  console.log(el);
};

Array.prototype.myMap = function (callback) {
  let mapArr = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    mapArr[index] = callback(element);
  }
  return mapArr;
};

const doubler = function (el) {
  return el * 2;
};

Array.prototype.myReduce = function (callback, initialValue) {
    let acc;
    let i;
    if (initialValue == null) {
      acc = this[0];
      i = 1;
    } else {
        acc = initialValue;
        i = 0;
    }
    for (i; i < this.length; i++){
        acc = callback(acc, this[i]);
    }
    return acc;
};

const callback = function(acc, el){
    return acc + el;
};

