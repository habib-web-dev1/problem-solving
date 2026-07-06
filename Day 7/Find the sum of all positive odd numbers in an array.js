//arr=[-3, 5, 2, 7, -1, 10, 9]

function sumOfPositiveOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [3, 5, 2, 7, -1, 10, 9];

console.log(sumOfPositiveOdd(arr));
