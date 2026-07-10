//arr=[4, 2, 7, 4, 1, 2, 9]
function findFirstUniqueNum(arr) {
  let frequencyMap = {};
  let firstUniqueNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]] !== undefined) {
      frequencyMap[arr[i]] = frequencyMap[arr[i]] + 1;
    } else {
      frequencyMap[arr[i]] = 1;
    }
    if (frequencyMap[arr[i]] === 1) {
      firstUniqueNum.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (frequencyMap[num] === 1) {
      return num;
    }
  }
  return null;
}
let arr = [4, 2, 7, 4, 1, 7, 2, 9];
console.log(findFirstUniqueNum(arr));
