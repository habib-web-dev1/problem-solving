//str="swiss"

function findMinTimesChr(str) {
  let frequencyMap = {};
  let minTimeValue = 1;
  let minTimesChr = null;
  for (let i = 0; i < str.length; i++) {
    if (frequencyMap[str[i]] !== undefined) {
      frequencyMap[str[i]] = frequencyMap[str[i]] + 1;
    } else {
      frequencyMap[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (frequencyMap[str[i]] === minTimeValue) {
      return str[i];
    }
  }
  return minTimesChr;
}
let str = "swwiiss";
console.log(findMinTimesChr(str));
