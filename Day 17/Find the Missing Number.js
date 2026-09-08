function missingNumberSum(nums) {
  let n = nums.length;

  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < nums.length; i = i + 1) {
    actualSum = actualSum + nums[i];
  }

  return expectedSum - actualSum;
}

console.log(missingNumberSum([3, 0, 1]));
console.log(missingNumberSum([0, 1]));
console.log(missingNumberSum([9, 6, 4, 2, 3, 5, 7, 0, 1]));
