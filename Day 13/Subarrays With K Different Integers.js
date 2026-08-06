function subarraysWithKDistinct(nums, k) {
  function atMost(maxK) {
    if (maxK <= 0) {
      return 0;
    }

    let left = 0;
    let distinctCount = 0;
    let totalSubarrays = 0;

    const counts = {};

    for (let right = 0; right < nums.length; right = right + 1) {
      const rightVal = nums[right];

      if (counts[rightVal] === undefined || counts[rightVal] === 0) {
        counts[rightVal] = 1;
        distinctCount = distinctCount + 1;
      } else {
        counts[rightVal] = counts[rightVal] + 1;
      }

      while (distinctCount > maxK) {
        const leftVal = nums[left];
        counts[leftVal] = counts[leftVal] - 1;

        if (counts[leftVal] === 0) {
          distinctCount = distinctCount - 1;
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

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));

console.log(subarraysWithKDistinct([1, 2, 1, 3, 4, 5], 3));
