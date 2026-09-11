function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (nums[i] === candidate) {
      count = count + 1;
    } else {
      count = count - 1;
    }
  }

  return candidate;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
