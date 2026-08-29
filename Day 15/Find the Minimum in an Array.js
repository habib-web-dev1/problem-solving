function findMinUnsorted(nums) {
  if (nums.length === 0) {
    return null;
  }

  let minVal = nums[0];

  for (let i = 1; i < nums.length; i = i + 1) {
    if (nums[i] < minVal) {
      minVal = nums[i];
    }
  }

  return minVal;
}

console.log(findMinUnsorted([5, 3, 9, 1, 7]));
