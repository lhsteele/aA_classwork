function range(start, end) {
    if (start > end) {
        return []; 
    }

    push_val = range(start, end - 1);
    push_val.push(end);
    return push_val;
}

function sumRec(arr) {
  if (arr.length == 1) {
    return arr.pop();
  }
  let last = arr.pop();
  return last + sumRec(arr);
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

function exponent2 (base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }
  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}

function Fib(n) {
  if (n <= 1) {
    return [1];
  } else if (n == 2) {
    return [1, 1];
  }
  arr = Fib(n - 1);
  let first = arr[arr.length-1];
  let second = arr[arr.length-2];
  arr.push(first+second);
  return arr;
}

function deepDup(arr) {
  let result = [];
  arr.forEach(element => {
    if (element instanceof Array) {
        result.push(deepDup(element));
    } else {
        result.push(element);
    }
    
  });
  return result;
}


function bsearch(arr, target) {
    if (arr.length === 0) {
      return null;
    }
    let halfway = arr.length / 2;

    let left = arr.slice(0, halfway);
    let right = arr.slice(halfway);

    if (arr[halfway] === target){
        return halfway;
    } else if (arr[halfway] < target) {
      return bsearch(left, target);
    } else if (arr[halfway] > target) {
      var res = bsearch(right, target);

      if (res === null) {
        return -1;
      } else {
        return halfway + 1 + res; 
      }
    }
}

function mergeSort(arr, callback) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = arr.length / 2;

  left = arr.slice(0, mid);
  right = arr.slice(mid);

  callback(left, right);

}

function mergeCallback(left, right) {
  var merged = [];

  while (left.length > 0 || right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift);
    } else {
      merged.push(right.shift);
    }
  }
  return merged;
}