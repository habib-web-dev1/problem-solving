//arr=[3,8,7,5,4,1]

function findSmallestOdd(arr) {
  let smallestOdd = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] < smallestOdd) {
      smallestOdd = arr[i];
    }
  }
  return smallestOdd;
}

let arr = [3, 8, 7, 5, 4, 10];

console.log(findSmallestOdd(arr));
