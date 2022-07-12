Array.prototype.uniq = function() {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    if (ans.indexOf(this[i]) === -1) {
      ans.push(this[i]);
    }
  }
  return ans;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());


Array.prototype.uniq2 = function() {
  let ans = [];
  this.forEach(function (el) {
    if (!ans.includes(el)) {
      ans.push(el);
    }
  });
  return ans;
};
// On^2
Array.prototype.twoSum = function() {
  const ans = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0){
        ans.push([i,j]);
      }
    }
  }
  return ans;
};

// On
// define ans array, and hash where key is -num and value = index 

Array.prototype.twoSumb = function() {
  const ans = [];
  const hash = {};
  for (let i = 0; i < this.length; i++){
    if (this[i] in hash) {
      ans.push([i,hash[this[i]]]);
    }
    else {
      hash[-(this[i])] = i;  
    }
  }
  return ans;
};

console.log([-1, 0, 2, -2, 1].twoSumb());


//iterate through the array which will be subarrays,        
Array.prototype.transpose = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      // [this[i][j], this[j][i]] = [this[j][i], this[i][j]]
      let a = this[i][j];
      let b = this[j][i];
      this[i][j] = b;
      this[j][i] = a;
    }
  }
  return this;
};
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());