//arr=[1, 2, 3, 4, 5, 6]

function squEven(arr) {
  let evenSqr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSqr.push(arr[i] ** 2);
    }
  }
  return evenSqr;
}

let arr = [1, 3, 8, 4, 5, 6];
console.log(squEven(arr));
