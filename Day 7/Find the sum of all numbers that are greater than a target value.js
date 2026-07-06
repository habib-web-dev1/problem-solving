//arr=[3, 8, 12, 5, 20, 7]

function sumOfGreaterThanTargetValue(arr) {
  let sum = 0;
  let target = 7;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [3, 8, 12, 9, 20, 7];
console.log(sumOfGreaterThanTargetValue(arr));
