function longestSubarrayAtMostKEven(nums, k) {
  let left = 0;
  let evenCount = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right = right + 1) {
    if (Math.abs(nums[right]) % 2 === 0) {
      evenCount = evenCount + 1;
    }

    while (evenCount > k) {
      if (Math.abs(nums[left]) % 2 === 0) {
        evenCount = evenCount - 1;
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

console.log(longestSubarrayAtMostKEven([1, 2, 3, 4, 5, 6], 2));
console.log(longestSubarrayAtMostKEven([2, 4, 6, 8], 1));
console.log(longestSubarrayAtMostKEven([1, 3, 5, 7], 0));
