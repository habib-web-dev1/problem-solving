function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    currentSum = currentSum + nums[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-5, -2, -8, -1]));
