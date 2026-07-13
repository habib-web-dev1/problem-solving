//str="banana"
function countCharacter(str) {
  let frequencyMap = {};
  for (let i = 0; i < str.length; i++) {
    if (frequencyMap[str[i]] !== undefined) {
      frequencyMap[str[i]] = frequencyMap[str[i]] + 1;
    } else {
      frequencyMap[str[i]] = 1;
    }
  }
  return frequencyMap;
}
let str = "banana";
console.log(countCharacter(str));
