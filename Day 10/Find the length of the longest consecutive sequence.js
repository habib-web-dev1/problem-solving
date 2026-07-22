function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  let maxLength = 0;

  for (let key in map) {
    let num = Number(key);

    if (map[num - 1] === undefined) {
      let currentNum = num;
      let currentStreak = 1;

      while (map[currentNum + 1] !== undefined) {
        currentNum++;
        currentStreak++;
      }

      if (currentStreak > maxLength) {
        maxLength = currentStreak;
      }
    }
  }

  return maxLength;
}
const nums = [100, 4, 200, 1, 3, 2, 5];
console.log(longestConsecutive(nums));
