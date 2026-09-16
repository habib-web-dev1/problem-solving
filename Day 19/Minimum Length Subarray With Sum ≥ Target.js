function minSubArrayLen(target, nums) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right = right + 1) {
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

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1]));
