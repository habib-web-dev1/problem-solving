//arr=[4, 2, 7, 4, 1, 2, 4, 7, 4]

function findMaxValueNum(arr) {
  let frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement = null;
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]] !== undefined) {
      frequencyMap[arr[i]] = frequencyMap[arr[i]] + 1;
    } else {
      frequencyMap[arr[i]] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]] > maxFrequency) {
      maxFrequency = frequencyMap[arr[i]];
      mostFrequentElement = arr[i];
    }
  }
  return mostFrequentElement;
}

let arr = [4, 2, 7, 4, 1, 2, 7, 7, 7];
console.log(findMaxValueNum(arr));
