//arr=[2, 5, 2, 8, 2, 10]
//target = 2

function remTarget(arr) {
  let newArr = [];
  let target = 5;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let arr = [5, 5, 2, 8, 5, 10];
console.log(remTarget(arr));
