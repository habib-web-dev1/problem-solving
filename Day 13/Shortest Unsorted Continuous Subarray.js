function findUnsortedSubarray(nums) {
  let n = nums.length;
  if (n <= 1) {
    return 0;
  }

  let leftBound = -1;
  let rightBound = -1;

  let maxSeen = nums[0];
  for (let i = 1; i < n; i = i + 1) {
    if (nums[i] < maxSeen) {
      rightBound = i;
    } else {
      maxSeen = nums[i];
    }
  }

  if (rightBound === -1) {
    return 0;
  }

  let minSeen = nums[n - 1];
  for (let i = n - 2; i >= 0; i = i - 1) {
    if (nums[i] > minSeen) {
      leftBound = i;
    } else {
      minSeen = nums[i];
    }
  }

  return rightBound - leftBound + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1, 2, 3, 4]));
console.log(findUnsortedSubarray([1]));
