//arr=[4, 2, 7, 4, 1, 2, 9]

function findDuplicates(arr) {
  let duplicatesNum = [];
  let duplicatesMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (duplicatesMap[arr[i]] !== undefined) {
      duplicatesNum.push(arr[i]);
    } else {
      duplicatesMap[arr[i]] = 1;
    }
  }
  return duplicatesNum;
}
let arr = [4, 2, 7, 7, 4, 1, 2, 9];
console.log(findDuplicates(arr));
