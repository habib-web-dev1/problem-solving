function findSecondSmallest(nums) {
  if (nums.length < 2) {
    return null;
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < nums.length; i = i + 1) {
    let current = nums[i];

    if (current < smallest) {
      secondSmallest = smallest;
      smallest = current;
    } else if (current < secondSmallest && current !== smallest) {
      secondSmallest = current;
    }
  }

  if (secondSmallest === Infinity) {
    return null;
  }

  return secondSmallest;
}

console.log(findSecondSmallest([12, 35, 1, 10, 34, 1]));
console.log(findSecondSmallest([10, 5, 10]));
console.log(findSecondSmallest([10, 10, 10]));
console.log(findSecondSmallest([7]));
