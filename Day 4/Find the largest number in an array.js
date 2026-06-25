//arr=[7, 3, 12, 5, 9]

function findLargestNum(arr) {
  let largestNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

let arr = [7, 23, 12, 5, 9];

console.log(findLargestNum(arr));
