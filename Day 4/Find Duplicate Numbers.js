//arr=[1, 2, 3, 2, 5, 1]

function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

let arr = [5, 1, 2, 3, 2, 3, 5, 1];
console.log(findDuplicates(arr));
