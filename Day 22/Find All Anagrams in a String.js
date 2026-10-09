function findAnagrams(s, p) {
  let result = [];
  let sLen = s.length;
  let pLen = p.length;

  if (sLen === 0 || pLen === 0 || sLen < pLen) {
    return result;
  }

  let pFreq = {};
  let uniqueChars = 0;

  for (let i = 0; i < pLen; i = i + 1) {
    let char = p[i];
    if (pFreq[char] === undefined) {
      pFreq[char] = 1;
      uniqueChars = uniqueChars + 1;
    } else {
      pFreq[char] = pFreq[char] + 1;
    }
  }

  let sFreq = {};
  let matches = 0;
  let left = 0;

  for (let right = 0; right < sLen; right = right + 1) {
    let rightChar = s[right];

    if (pFreq[rightChar] !== undefined) {
      if (sFreq[rightChar] === undefined) {
        sFreq[rightChar] = 1;
      } else {
        sFreq[rightChar] = sFreq[rightChar] + 1;
      }

      if (sFreq[rightChar] === pFreq[rightChar]) {
        matches = matches + 1;
      }
    }

    if (right - left + 1 > pLen) {
      let leftChar = s[left];

      if (pFreq[leftChar] !== undefined) {
        if (sFreq[leftChar] === pFreq[leftChar]) {
          matches = matches - 1;
        }
        sFreq[leftChar] = sFreq[leftChar] - 1;
      }

      left = left + 1;
    }

    if (matches === uniqueChars) {
      result[result.length] = left;
    }
  }

  return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
