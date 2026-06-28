//arr=[3, 8, 5, 10, 7, 12]

function filteredEven(arr) {
  let filterRes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      filterRes.push(arr[i]);
    }
  }
  return filterRes;
}

let arr = [32, 8, 5, 10, 7, 12];

console.log(filteredEven(arr));
