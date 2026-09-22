function findMaxLengthPosNeg(nums) {
  let map = {};

  map[0] = -1;

  let currentSum = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] > 0) {
      currentSum = currentSum + 1;
    } else if (nums[i] < 0) {
      currentSum = currentSum - 1;
    }

    if (map[currentSum] !== undefined) {
      let length = i - map[currentSum];
      if (length > maxLength) {
        maxLength = length;
      }
    } else {
      map[currentSum] = i;
    }
  }

  return maxLength;
}

// Examples
console.log(findMaxLengthPosNeg([1, -2, 3, -4, 5]));
console.log(findMaxLengthPosNeg([2, 0, -3, 4, -5]));
console.log(findMaxLengthPosNeg([1, 2, 3, 4]));
