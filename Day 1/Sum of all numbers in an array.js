//arr=[5,8,9,4,3]

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [10, 8];

console.log(sumOfArray(arr));
