function intersect(nums1, nums2) {
  let counts = {};

  for (let i = 0; i < nums1.length; i = i + 1) {
    let num = nums1[i];
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num] = counts[num] + 1;
    }
  }

  let result = [];
  let resultLen = 0;

  for (let j = 0; j < nums2.length; j = j + 1) {
    let num = nums2[j];
    if (counts[num] !== undefined && counts[num] > 0) {
      result[resultLen] = num;
      resultLen = resultLen + 1;
      counts[num] = counts[num] - 1;
    }
  }

  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
