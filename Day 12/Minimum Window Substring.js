function minWindow(s, t) {
  if (s.length === 0 || t.length === 0 || s.length < t.length) {
    return "";
  }

  const targetCounts = {};
  let uniqueTargetChars = 0;

  for (let i = 0; i < t.length; i = i + 1) {
    const char = t[i];
    if (targetCounts[char] === undefined) {
      targetCounts[char] = 1;
      uniqueTargetChars = uniqueTargetChars + 1;
    } else {
      targetCounts[char] = targetCounts[char] + 1;
    }
  }

  const windowCounts = {};
  let matchedChars = 0;
  let left = 0;

  let minLen = Infinity;
  let minStart = 0;

  for (let right = 0; right < s.length; right = right + 1) {
    const rightChar = s[right];

    if (windowCounts[rightChar] === undefined) {
      windowCounts[rightChar] = 1;
    } else {
      windowCounts[rightChar] = windowCounts[rightChar] + 1;
    }

    if (targetCounts[rightChar] !== undefined) {
      if (windowCounts[rightChar] === targetCounts[rightChar]) {
        matchedChars = matchedChars + 1;
      }
    }

    while (matchedChars === uniqueTargetChars) {
      let currentLen = right - left + 1;

      if (currentLen < minLen) {
        minLen = currentLen;
        minStart = left;
      }

      const leftChar = s[left];

      if (targetCounts[leftChar] !== undefined) {
        if (windowCounts[leftChar] === targetCounts[leftChar]) {
          matchedChars = matchedChars - 1;
        }
      }

      windowCounts[leftChar] = windowCounts[leftChar] - 1;
      left = left + 1;
    }
  }

  if (minLen === Infinity) {
    return "";
  }

  let result = "";
  for (let i = minStart; i < minStart + minLen; i = i + 1) {
    result = result + s[i];
  }

  return result;
}

console.log(minWindow("ADOBECODEBANC", "ABCD"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
