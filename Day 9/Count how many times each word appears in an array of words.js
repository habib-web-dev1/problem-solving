// arr=["apple", "banana", "apple", "orange", "banana", "apple"]
function countWord(word) {
  let wordMap = {};
  for (let i = 0; i < word.length; i++) {
    if (wordMap[word[i]] !== undefined) {
      wordMap[word[i]] = wordMap[word[i]] + 1;
    } else {
      wordMap[word[i]] = 1;
    }
  }
  return wordMap;
}

let word = ["apple", "banana", "apple", "orange", "banana", "apple", "orange"];
console.log(countWord(word));
