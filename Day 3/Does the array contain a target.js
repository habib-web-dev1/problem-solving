// arr = [4, 8, 2, 9]
// target = 2

function contTarget(arr) {
  let target = 5;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

let arr = [4, 8, 2, 9];
console.log(contTarget(arr));
