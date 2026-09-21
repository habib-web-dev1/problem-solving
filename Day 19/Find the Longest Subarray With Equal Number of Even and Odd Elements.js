function findMaxLengthEvenOdd(nums) {
  let map = {};

  map[0] = -1;

  let currentSum = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] % 2 !== 0) {
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

console.log(findMaxLengthEvenOdd([1, 2, 3, 4, 5]));
console.log(findMaxLengthEvenOdd([2, 4, 6, 8]));
console.log(findMaxLengthEvenOdd([1, 3, 5, 2, 4, 6, 7]));
