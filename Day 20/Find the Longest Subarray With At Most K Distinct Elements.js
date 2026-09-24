function lengthOfLongestSubarrayKDistinct(nums, k) {
  if (k === 0 || nums.length === 0) {
    return 0;
  }

  let freq = {};
  let distinctCount = 0;
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right = right + 1) {
    let rightVal = nums[right];

    if (freq[rightVal] === undefined || freq[rightVal] === 0) {
      distinctCount = distinctCount + 1;
      freq[rightVal] = 1;
    } else {
      freq[rightVal] = freq[rightVal] + 1;
    }

    while (distinctCount > k) {
      let leftVal = nums[left];
      freq[leftVal] = freq[leftVal] - 1;

      if (freq[leftVal] === 0) {
        distinctCount = distinctCount - 1;
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

console.log(lengthOfLongestSubarrayKDistinct([1, 2, 1, 2, 3], 2));
console.log(lengthOfLongestSubarrayKDistinct([1, 2, 1, 3, 4], 3));
console.log(lengthOfLongestSubarrayKDistinct([1, 1, 1, 1], 1));
