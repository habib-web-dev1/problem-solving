function findMaxLength(nums) {
  let map = {};

  map[0] = -1;

  let currentSum = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] === 1) {
      currentSum = currentSum + 1;
    } else {
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

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));
