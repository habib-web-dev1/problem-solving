function minWindowKDistinct(nums, k) {
  if (k <= 0) {
    return 0;
  }

  let freq = {};
  let distinctCount = 0;
  let left = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right = right + 1) {
    let rightVal = nums[right];

    if (freq[rightVal] === undefined || freq[rightVal] === 0) {
      distinctCount = distinctCount + 1;
      freq[rightVal] = 1;
    } else {
      freq[rightVal] = freq[rightVal] + 1;
    }

    while (distinctCount >= k) {
      let currentLength = right - left + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
      }

      let leftVal = nums[left];
      freq[leftVal] = freq[leftVal] - 1;

      if (freq[leftVal] === 0) {
        distinctCount = distinctCount - 1;
      }

      left = left + 1;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minWindowKDistinct([1, 2, 1, 3, 2, 4], 3));
console.log(minWindowKDistinct([1, 1, 1, 1], 2));
console.log(minWindowKDistinct([2, 1, 3, 2, 3], 3));
