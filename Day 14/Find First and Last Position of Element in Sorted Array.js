function searchRange(nums, target) {
  function findBound(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let bound = -1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return bound;
  }

  let firstPos = findBound(true);

  if (firstPos === -1) {
    return [-1, -1];
  }

  let lastPos = findBound(false);

  return [firstPos, lastPos];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
