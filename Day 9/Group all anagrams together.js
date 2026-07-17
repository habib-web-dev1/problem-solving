function groupAnagrams(wordsArray) {
  let anagramGroups = {};

  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];

    let countMap = {};
    for (let j = 0; j < currentWord.length; j++) {
      let char = currentWord[j];
      countMap[char] = (countMap[char] || 0) + 1;
    }

    let stringKey = "";

    for (let char of "abcdefghijklmnopqrstuvwxyz") {
      if (countMap[char]) {
        stringKey += char + countMap[char];
      }
    }

    if (anagramGroups[stringKey] === undefined) {
      anagramGroups[stringKey] = [];
    }
    anagramGroups[stringKey].push(currentWord);
  }

  return Object.values(anagramGroups);
}

let words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));

function groupAnagrams(words) {
  const groupMap = {};

  for (let i = 0; i < words.length; i++) {
    const key = words[i].split("").sort().join("");

    if (groupMap[key] !== undefined) {
      groupMap[key].push(words[i]);
    } else {
      groupMap[key] = [words[i]];
    }
  }

  return Object.values(groupMap);
}
