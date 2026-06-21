//arr=[4,5,9,1,4,6]

function countEvenNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

let arr = [4, 5, 9, 1, 7, 6];

console.log(countEvenNumber(arr));
