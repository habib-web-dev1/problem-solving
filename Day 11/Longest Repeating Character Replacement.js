function characterReplacement(s, k) {
  let left = 0;
  let maxFrequency = 0;
  let maxLength = 0;

  const counts = {};

  for (let right = 0; right < s.length; right = right + 1) {
    const rightChar = s[right];

    if (counts[rightChar] === undefined) {
      counts[rightChar] = 1;
    } else {
      counts[rightChar] = counts[rightChar] + 1;
    }

    if (counts[rightChar] > maxFrequency) {
      maxFrequency = counts[rightChar];
    }

    let currentWindowLength = right - left + 1;

    if (currentWindowLength - maxFrequency > k) {
      const leftChar = s[left];
      counts[leftChar] = counts[leftChar] - 1;
      left = left + 1;
    }

    let validWindowLength = right - left + 1;
    if (validWindowLength > maxLength) {
      maxLength = validWindowLength;
    }
  }

  return maxLength;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBAB", 3));
