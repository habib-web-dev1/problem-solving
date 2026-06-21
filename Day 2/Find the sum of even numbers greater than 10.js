//arr=[4,6,8,10,12,14]

function sumOfEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 10) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [4, 6, 8, 10, 9, 14];

console.log(sumOfEven(arr));
