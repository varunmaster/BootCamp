// Usage:
//   node map_func <list of numbers>
//
// ex:
//
//   node map_func 1 2 3
//

var inputNumArr = process.argv.slice(2);
console.log(inputNumArr.join(' '));

const map = function(arr, cb) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newNum = cb(arr[i]);
    newArr.push(newNum);
  }

  return newArr;
};

// Transformation - multiple by 2
var mapArr = map(inputNumArr, (eachNum) => {
    return eachNum * 2;
});

console.log(mapArr.join(' '));
