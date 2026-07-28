function moveZeroes(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right = right + 1) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left = left + 1;
    }
  }

  for (let i = left; i < nums.length; i = i + 1) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 0, 12]));
console.log(moveZeroes([0]));
