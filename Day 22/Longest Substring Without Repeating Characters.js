function lengthOfLongestSubstring(s) {
  let lastSeen = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right = right + 1) {
    let currentChar = s[right];

    if (lastSeen[currentChar] !== undefined && lastSeen[currentChar] >= left) {
      left = lastSeen[currentChar] + 1;
    }

    lastSeen[currentChar] = right;

    let currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
