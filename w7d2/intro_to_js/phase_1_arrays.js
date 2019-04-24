Array.prototype.uniq = function() {
  let uniqArr = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (!uniqArr.includes(element)) {
      uniqArr.push(element);
    }
  }
  return uniqArr;
};

Array.prototype.twoSum = function () {
  let pairSums = []; 
  for (let index = 0; index < this.length; index++) {
    for (let index1 = index; index1 < this.length; index1++){
      const element1 = this[index];
      const element2 = this[index1];
      if (element1 + element2 === 0) {
        pairSums.push([index, index1]);
      }
    }
    
  }
  return pairSums;
};
// [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// Array#transpose
Array.prototype.transpose = function() {
  const columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }

  return columns;
};



