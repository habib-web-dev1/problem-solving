//arr=[8, 15, 3, 10, 21, 5]

function largestOddNum(arr) {
  let largeOdd = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > largeOdd) {
      largeOdd = arr[i];
    }
  }
  return largeOdd;
}

let arr = [8, 155, 3, 10, 21, 5];

console.log(largestOddNum(arr));
