function findMaxLength012(nums) {
  let map = {};

  map["0#0"] = -1;

  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] === 0) {
      count0 = count0 + 1;
    } else if (nums[i] === 1) {
      count1 = count1 + 1;
    } else if (nums[i] === 2) {
      count2 = count2 + 1;
    }

    let delta10 = count1 - count0;
    let delta21 = count2 - count1;

    let key = delta10 + "#" + delta21;

    if (map[key] !== undefined) {
      let length = i - map[key];
      if (length > maxLength) {
        maxLength = length;
      }
    } else {
      map[key] = i;
    }
  }

  return maxLength;
}

console.log(findMaxLength012([0, 1, 2, 0, 1, 2]));
console.log(findMaxLength012([0, 1, 2, 1, 2, 0]));
console.log(findMaxLength012([0, 1, 0, 2, 0, 1, 2]));
console.log(findMaxLength012([1, 1, 1]));
