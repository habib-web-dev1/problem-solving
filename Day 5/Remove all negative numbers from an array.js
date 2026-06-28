//arr=[3, -2, 5, -1, 8]

function filteredNeg(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

let arr = [-3, -2, -5, -1, -8];

console.log(filteredNeg(arr));
