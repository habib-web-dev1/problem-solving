function numSubarraysWithSum(nums, goal) {
  function atMost(maxGoal) {
    if (maxGoal < 0) {
      return 0;
    }
    let left = 0;
    let currentSum = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right = right + 1) {
      currentSum = currentSum + nums[right];

      while (currentSum > maxGoal) {
        currentSum = currentSum - nums[left];
        left = left + 1;
      }

      let windowSize = right - left + 1;
      count = count + windowSize;
    }

    return count;
  }

  let countGoal = atMost(goal);
  let countGoalMinusOne = atMost(goal - 1);

  return countGoal - countGoalMinusOne;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1, 0], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0, 0], 0));
