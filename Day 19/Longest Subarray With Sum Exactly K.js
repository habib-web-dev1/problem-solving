function maxSubArrayLen(nums, k) {
  let map = {};

  map[0] = -1;

  let currentSum = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    currentSum = currentSum + nums[i];

    let target = currentSum - k;

    if (map[target] !== undefined) {
      let length = i - map[target];
      if (length > maxLength) {
        maxLength = length;
      }
    }

    if (map[currentSum] === undefined) {
      map[currentSum] = i;
    }
  }

  return maxLength;
}

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));
console.log(maxSubArrayLen([-2, -1, 2, 1], 1));
console.log(maxSubArrayLen([1, 2, 3], 7));
