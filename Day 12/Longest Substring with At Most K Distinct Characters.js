function lengthOfLongestSubstringKDistinct(s, k) {
  if (s.length === 0 || k <= 0) {
    return 0;
  }

  let left = 0;
  let maxLength = 0;
  let distinctTypes = 0;

  const counts = {};

  for (let right = 0; right < s.length; right = right + 1) {
    const rightChar = s[right];

    if (counts[rightChar] === undefined || counts[rightChar] === 0) {
      counts[rightChar] = 1;
      distinctTypes = distinctTypes + 1;
    } else {
      counts[rightChar] = counts[rightChar] + 1;
    }

    while (distinctTypes > k) {
      const leftChar = s[left];
      counts[leftChar] = counts[leftChar] - 1;

      if (counts[leftChar] === 0) {
        distinctTypes = distinctTypes - 1;
      }

      left = left + 1;
    }

    let currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstringKDistinct("ececba", 2));
console.log(lengthOfLongestSubstringKDistinct("aa", 1));
console.log(lengthOfLongestSubstringKDistinct("a", 0));
