function longestOnes(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right = right + 1) {
    if (nums[right] === 0) {
      zeroCount = zeroCount + 1;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount = zeroCount - 1;
      }
      left = left + 1;
    }

    let currentWindowLength = right - left + 1;
    if (currentWindowLength > maxLength) {
      maxLength = currentWindowLength;
    }
  }

  return maxLength;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);
