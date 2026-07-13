//str="banana"

function findMostTimesChr(str) {
  let frequencyMap = {};
  let maxTimeValue = 0;
  let mostTimesChr = null;
  for (let i = 0; i < str.length; i++) {
    if (frequencyMap[str[i]] !== undefined) {
      frequencyMap[str[i]] = frequencyMap[str[i]] + 1;
    } else {
      frequencyMap[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (frequencyMap[str[i]] > maxTimeValue) {
      maxTimeValue = frequencyMap[str[i]];
      mostTimesChr = str[i];
    }
  }
  return mostTimesChr;
}
let str = "banana";
console.log(findMostTimesChr(str));
