// arr =[-5, 2, -8, 0, 3]

function absNumb(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push((arr[i] = -arr[i]));
    } else {
      newArr.push((arr[i] = arr[i]));
    }
  }

  return newArr;
}

let arr = [-2, -4, -5, 9];
console.log(absNumb(arr));
