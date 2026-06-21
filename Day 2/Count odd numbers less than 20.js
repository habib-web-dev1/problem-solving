//arr=[11,14,13,21,19,25]

function countOddNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] < 20) {
      count++;
    }
  }
  return count;
}

let arr = [21, 14, 13, 21, 19, 25];

console.log(countOddNum(arr));
