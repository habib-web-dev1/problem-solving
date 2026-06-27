//arr=[5, 10, 15, 20]

function copyArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}
let arr = [3, 5, 10, 15, 20];

console.log(copyArr(arr));
