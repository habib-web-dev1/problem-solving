// arr=[7,5,3,4,2]

function findFirstEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
}

let arr = [7, 8, 3, 4, 2];

console.log(findFirstEvenNumber(arr));
