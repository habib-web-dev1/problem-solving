//arr=[2, 7, 11, 15]

function twoSum(nums, target) {
  let seenNumbers = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let complement = target - currentNum;

    if (seenNumbers[complement] !== undefined) {
      return [seenNumbers[complement], i];
    }

    seenNumbers[currentNum] = i;
  }

  return [];
}

let nums = [2, 7, 11, 15];
let target = 17;
console.log(twoSum(nums, target));
