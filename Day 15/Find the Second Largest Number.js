function findSecondLargest(nums) {
  if (nums.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i = i + 1) {
    let current = nums[i];

    if (current > largest) {
      secondLargest = largest;
      largest = current;
    } else if (current > secondLargest && current !== largest) {
      secondLargest = current;
    }
  }

  if (secondLargest === -Infinity) {
    return null;
  }

  return secondLargest;
}

console.log(findSecondLargest([12, 35, 1, 10, 34, 1]));
console.log(findSecondLargest([10, 5, 10]));
console.log(findSecondLargest([10, 10, 10]));
console.log(findSecondLargest([7]));
