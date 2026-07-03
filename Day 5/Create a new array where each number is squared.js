//arr= [2, 3, 4, 5]

function squaredArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2);
  }
  return newArr;
}

let arr = [-2, 3, 7, 5];
console.log(squaredArray(arr));
