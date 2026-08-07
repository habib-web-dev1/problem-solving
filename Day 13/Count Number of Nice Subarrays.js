function numberOfSubarrays(nums, k) {
  function atMost(maxK) {
    if (maxK < 0) {
      return 0;
    }

    let left = 0;
    let oddCount = 0;
    let totalSubarrays = 0;

    for (let right = 0; right < nums.length; right = right + 1) {
      if (nums[right] % 2 !== 0) {
        oddCount = oddCount + 1;
      }

      while (oddCount > maxK) {
        if (nums[left] % 2 !== 0) {
          oddCount = oddCount - 1;
        }
        left = left + 1;
      }

      let windowSize = right - left + 1;
      totalSubarrays = totalSubarrays + windowSize;
    }

    return totalSubarrays;
  }

  let countK = atMost(k);
  let countKMinusOne = atMost(k - 1);

  return countK - countKMinusOne;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));

console.log(numberOfSubarrays([2, 4, 6], 1));

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
