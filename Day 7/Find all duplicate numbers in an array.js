//arr=[4, 2, 7, 4, 1, 2, 9]

function findDuplicates(arr) {
  let duplicatesNum = [];
  let duplicatesMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (duplicatesMap[arr[i]] !== undefined) {
      duplicatesMap[arr[i]] = duplicatesMap[arr[i]] + 1;
    } else {
      duplicatesMap[arr[i]] = 1;
    }
    if (duplicatesMap[arr[i]] === 2) {
      duplicatesNum.push(arr[i]);
    }
  }

  return duplicatesNum;
}
let arr = [4, 2, 7, 7, 4, 1, 2, 4, 9];
console.log(findDuplicates(arr));
