function maxSubarraySum(arr, k) {
  if (arr.length < k || k <= 0) return 0;

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];

    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 4));
console.log(maxSubarraySum([2, 3, 4, 1, 5], 2));
