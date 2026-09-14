function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let set = {};
  for (let i = 0; i < nums.length; i = i + 1) {
    set[nums[i]] = true;
  }

  let longestStreak = 0;

  for (let j = 0; j < nums.length; j = j + 1) {
    let num = nums[j];

    if (set[num - 1] === undefined) {
      let currentNum = num;
      let currentStreak = 1;

      while (set[currentNum + 1] === true) {
        currentNum = currentNum + 1;
        currentStreak = currentStreak + 1;
      }

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    }
  }

  return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
