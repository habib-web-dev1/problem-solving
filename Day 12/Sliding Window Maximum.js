function maxSlidingWindow(nums, k) {
  const result = [];
  if (nums.length === 0 || k <= 0) {
    return result;
  }

  const deque = [];
  let head = 0;
  let tail = 0;

  for (let right = 0; right < nums.length; right = right + 1) {
    while (tail > head && nums[deque[tail - 1]] <= nums[right]) {
      tail = tail - 1;
    }

    deque[tail] = right;
    tail = tail + 1;

    if (deque[head] <= right - k) {
      head = head + 1;
    }

    if (right >= k - 1) {
      let maxIndex = deque[head];
      result[result.length] = nums[maxIndex];
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7, 8], 3));
