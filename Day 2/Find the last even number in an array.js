//arr=[4,7,5,8,2,6]

function findLastEvenNumber(arr) {
  let lastEvenNumber = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      lastEvenNumber = arr[i];
    }
  }
  return lastEvenNumber;
}

let arr = [4, 7, 5, 8, 3, 5];

console.log(findLastEvenNumber(arr));
