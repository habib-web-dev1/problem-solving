function minWindow(s, t) {
  if (s.length === 0 || t.length === 0 || s.length < t.length) {
    return "";
  }

  let needed = {};
  let requiredCount = 0;

  for (let i = 0; i < t.length; i = i + 1) {
    let char = t[i];
    if (needed[char] === undefined) {
      needed[char] = 1;
      requiredCount = requiredCount + 1;
    } else {
      needed[char] = needed[char] + 1;
    }
  }

  let window = {};
  let formedCount = 0;
  let left = 0;

  let minLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right = right + 1) {
    let char = s[right];

    if (needed[char] !== undefined) {
      if (window[char] === undefined) {
        window[char] = 1;
      } else {
        window[char] = window[char] + 1;
      }

      if (window[char] === needed[char]) {
        formedCount = formedCount + 1;
      }
    }

    while (formedCount === requiredCount) {
      let windowLen = right - left + 1;
      if (windowLen < minLen) {
        minLen = windowLen;
        bestStart = left;
      }

      let leftChar = s[left];

      if (needed[leftChar] !== undefined) {
        window[leftChar] = window[leftChar] - 1;

        if (window[leftChar] < needed[leftChar]) {
          formedCount = formedCount - 1;
        }
      }

      left = left + 1;
    }
  }

  if (minLen === Infinity) {
    return "";
  }

  let result = "";
  for (let i = bestStart; i < bestStart + minLen; i = i + 1) {
    result = result + s[i];
  }

  return result;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
