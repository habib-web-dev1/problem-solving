function subarraySum(nums, k) {
  let prefixCounts = {};

  prefixCounts[0] = 1;

  let currentSum = 0;
  let totalCount = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    currentSum = currentSum + nums[i];
    let target = currentSum - k;

    if (prefixCounts[target] !== undefined) {
      totalCount = totalCount + prefixCounts[target];
    }

    if (prefixCounts[currentSum] === undefined) {
      prefixCounts[currentSum] = 1;
    } else {
      prefixCounts[currentSum] = prefixCounts[currentSum] + 1;
    }
  }

  return totalCount;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, -1, 0], 0));
