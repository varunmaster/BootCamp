const arrayToCheck = [1, 2, 3, 4];

const checkIfInArray = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(checkIfInArray(arrayToCheck, "4"));
