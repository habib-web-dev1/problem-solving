// arr = [5, 7, 3, 9]
// target = 2

function findIndOfTarget(arr) {
  let target = 6;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let = arr = [4, 8, 2, 9];

console.log(findIndOfTarget(arr));
