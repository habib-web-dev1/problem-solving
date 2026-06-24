//arr=[2,4,-5,6,2,-1]

function findIndexofNegNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return i;
    }
  }
}
let arr = [2, 4, 5, 6, 2, -1];

console.log(findIndexofNegNum(arr));
