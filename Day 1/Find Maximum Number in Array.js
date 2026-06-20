//arr=[3,7,2,9,5]

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [3, 10, 2, 9, 5];

console.log(findMax(arr));
