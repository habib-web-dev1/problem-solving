//arr=[3,6,4,9,2,8]

function findMaxEvenNum(arr) {
  let maxEvenNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > maxEvenNum) {
      maxEvenNum = arr[i];
    }
  }
  return maxEvenNum;
}

let arr = [3, 16, 4, 9, 2, 8];

console.log(findMaxEvenNum(arr));
