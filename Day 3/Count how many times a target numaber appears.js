//arr = [2, 4, 5, 4, 5, 4]
//target = 4

function countTarNum(arr) {
  let target = 5;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

let arr = [2, 4, 5, 4, 5, 4];

console.log(countTarNum(arr));
