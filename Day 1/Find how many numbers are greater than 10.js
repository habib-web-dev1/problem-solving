// arr=[9,12,7,14,20]

function findGreaterThenTen(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      count++;
    }
  }
  return count;
}

let arr = [9, 2, 7, 14, 20];

console.log(findGreaterThenTen(arr));
