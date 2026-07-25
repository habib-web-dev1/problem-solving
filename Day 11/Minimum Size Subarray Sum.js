function minSubArrayLen(target, nums) {
  if (nums.length === 0) {
    return 0;
  }
  let minLength = Infinity;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum = currentSum + nums[right];
    while (currentSum >= target) {
      let currentLength = right - left + 1;

      if (currentLength < minLength) {
        minLength = currentLength;
      }

      currentSum = currentSum - nums[left];
      left = left + 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

console.log("Final Answer:", minSubArrayLen(2, [2, 3, 1, 2, 4, 3]));
