function lengthOfLongestSubstring(s) {
  const lastSeen = {};
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (lastSeen[char] !== undefined && lastSeen[char] >= left) {
      left = lastSeen[char] + 1;
    }

    lastSeen[char] = right;

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
