//arr=[1, 2, 3, 4, 5]

//Method 1
function revArray(arr) {
  let revArr = [];
  for (let i = 0; i < arr.length; i++) {
    revArr.unshift(arr[i]);
  }
  return revArr;
}
let arr = [1, 2, 3, 4, 5];

console.log(revArray(arr));

//Method 2

function reArr(arr) {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }

  return res;
}

console.log(reArr(arr));

//Method 3

function reversed(arr) {
  return arr.reverse();
}
console.log(reversed(arr));
