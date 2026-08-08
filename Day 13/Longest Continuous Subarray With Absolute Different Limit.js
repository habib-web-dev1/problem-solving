function numberOfSubarrays(nums, k) {
  let count = 0;
  let currentOdds = 0;

  const prefixMap = {};
  prefixMap[0] = 1;

  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] % 2 !== 0) {
      currentOdds = currentOdds + 1;
    }

    let target = currentOdds - k;
    if (prefixMap[target] !== undefined) {
      count = count + prefixMap[target];
    }

    if (prefixMap[currentOdds] === undefined) {
      prefixMap[currentOdds] = 1;
    } else {
      prefixMap[currentOdds] = prefixMap[currentOdds] + 1;
    }
  }

  return count;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 4, 6], 1));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
