//arr=[1, 2, 3, 1]
function duplicateValue(arr) {
  let frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]] !== undefined) {
      return true;
    } else {
      frequencyMap[arr[i]] = 1;
    }
  }
  return false;
}
let arr = [1, 2, 3, 3];
console.log(duplicateValue(arr));
