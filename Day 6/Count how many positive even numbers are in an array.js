//arr=[-3, 2, 4, -8, 5, 10, 0]

function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 0) {
      count++;
    }
  }
  return count;
}

let arr = [-3, -2, 4, -8, 5, 10, 0];
console.log(countEven(arr));
