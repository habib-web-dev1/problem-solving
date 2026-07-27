function findAnagrams(s, p) {
  const result = [];

  if (p.length > s.length) {
    return result;
  }

  const countP = {};
  const countS = {};

  for (let i = 0; i < p.length; i = i + 1) {
    const charP = p[i];
    const charS = s[i];

    if (countP[charP] === undefined) {
      countP[charP] = 1;
    } else {
      countP[charP] = countP[charP] + 1;
    }

    if (countS[charS] === undefined) {
      countS[charS] = 1;
    } else {
      countS[charS] = countS[charS] + 1;
    }
  }

  for (let i = p.length; i <= s.length; i = i + 1) {
    let isMatch = true;

    for (let char in countP) {
      if (countP[char] !== countS[char]) {
        isMatch = false;
      }
    }

    if (isMatch === true) {
      const startIndex = i - p.length;
      result[result.length] = startIndex;
    }

    if (i === s.length) {
      break;
    }

    const newChar = s[i];
    const oldChar = s[i - p.length];

    if (countS[newChar] === undefined) {
      countS[newChar] = 1;
    } else {
      countS[newChar] = countS[newChar] + 1;
    }

    countS[oldChar] = countS[oldChar] - 1;
  }

  return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
