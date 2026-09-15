function longestSubarraySumLEK(nums, k) {
  let left = 0;
  let currentSum = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right = right + 1) {
    currentSum = currentSum + nums[right];

    while (currentSum > k && left <= right) {
      currentSum = currentSum - nums[left];
      left = left + 1;
    }

    let currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

console.log(longestSubarraySumLEK([1, 2, 1, 0, 1, 1, 0], 4));
console.log(longestSubarraySumLEK([3, 1, 2, 1, 4, 5], 4));
console.log(longestSubarraySumLEK([1, 2, 3, 4, 5], 11));
