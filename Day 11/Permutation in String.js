function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];

    count1[char1] = (count1[char1] || 0) + 1;
    count2[char2] = (count2[char2] || 0) + 1;
  }

  for (let i = s1.length; i <= s2.length; i++) {
    let isMatch = true;
    for (let char in count1) {
      if (count1[char] !== count2[char]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return true;

    if (i === s2.length) break;

    const newChar = s2[i];
    const oldChar = s2[i - s1.length];

    count2[newChar] = (count2[newChar] || 0) + 1;
    count2[oldChar] = count2[oldChar] - 1;
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboboo"));
