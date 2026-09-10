function moveNegatives(nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read = read + 1) {
    if (nums[read] < 0) {
      if (read !== write) {
        let temp = nums[write];
        nums[write] = nums[read];
        nums[read] = temp;
      }
      write = write + 1;
    }
  }

  return nums;
}

let arr1 = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
moveNegatives(arr1);
console.log(arr1);

let arr2 = [1, -1, 3, 2, -7, -5, 11, 6];
moveNegatives(arr2);
console.log(arr2);
