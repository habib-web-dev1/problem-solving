function moveZeroes(nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read = read + 1) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write = write + 1;
    }
  }

  while (write < nums.length) {
    nums[write] = 0;
    write = write + 1;
  }

  return nums;
}

let arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1);

let arr2 = [0];
moveZeroes(arr2);
console.log(arr2);
