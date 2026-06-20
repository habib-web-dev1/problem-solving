//arr=[14,10,5,2,7,1]

function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let arr = [14, 20, 5, 2, 0, 7, 1];

console.log(findMin(arr));
