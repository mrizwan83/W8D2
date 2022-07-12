Array.prototype.bubbleSort = function () {
  let sorted = false;
  let arr = [...this];
  while (!sorted) {
    sorted = true;


    for (i = 0; i < (arr.length - 1); i++) {
      if (arr[i] > arr[(i + 1)]) {
        [arr[i], arr[(i + 1)]] = [arr[(i + 1)], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
};

console.log([5, 3, 4, 2, 1].bubbleSort());


String.prototype.subStrings = function () {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    for (j = i; j < this.length; j++) {
      arr.push(this.slice(i, (j + 1)));
    }
  }
  return arr; 
}

console.log("abc".subStrings());