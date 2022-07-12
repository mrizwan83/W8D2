const NUMS = [1,2,3,4,5,6,7,8,9];

Array.prototype.myEach = function (banana) {
  for (let i = 0; i < this.length; i++) {
    banana(this[i]);
  }
};

NUMS.myEach(function (num) {
  console.log(`square of ${num} is ${num * num}`);
});


Array.prototype.myMap = function (apple) {
  const ans = [];
  this.myEach(function (num) {
    ans.push(apple(num));
  });
  return ans;
};

console.log(NUMS.myMap(num => num * num));

////Array.my_inject

Array.prototype.myReduce = function (func, initialValue) {
  let arr = this;

  if (initialValue === undefined) {
      initialValue = arr[0];
      arr = arr.slice(1);
  }

  let result = initialValue;

  arr.myEach(function (el) {
    return result = func(result, el);
  });

  return result;
};

console.log(NUMS.myReduce(function (total, item) {
  return total + item;
}));
