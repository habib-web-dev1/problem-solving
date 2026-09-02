function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let write = 1;

  for (let read = 1; read < nums.length; read = read + 1) {
    if (nums[read] !== nums[write - 1]) {
      nums[write] = nums[read];
      write = write + 1;
    }
  }

  return write;
}

let arr1 = [1, 1, 2];
let k1 = removeDuplicates(arr1);
console.log(k1);
console.log(arr1.slice(0, k1));

let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(arr2);
console.log(k2);
console.log(arr2.slice(0, k2));
