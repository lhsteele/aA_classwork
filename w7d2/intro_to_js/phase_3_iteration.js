Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let index = 0; index < this.length - 1; index++) {
      const element1 = this[index];
      const element2 = this[index + 1];
      if (element1 > element2) {
        let temp = element1;
        this[index] = element2;
        this[index + 1] = temp;
        sorted = false;
      }
    }
  }
};

String.prototype.substrings = function() {
  let subs = [];
  for (let index = 0; index < this.length; index++) {
    for (let index1 = 0; index1 <= this.length; index1++) {
      if (index != index1) {
        subs.push(this.substring(index, index1));
      }
    }
  }
  return subs;
};