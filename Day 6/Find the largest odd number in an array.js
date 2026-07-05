//arr=[4, 9, 2, 15, 7, 10]
function findMaxOdd(arr) {
  let maxOdd = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > maxOdd) {
      maxOdd = arr[i];
    }
  }
  return maxOdd;
}

let arr = [4, 9, 2, 15, 7, 101];
console.log(findMaxOdd(arr));
