function findUnionUnique(nums1, nums2) {
  let seen = {};
  let result = [];
  let resultLen = 0;

  for (let i = 0; i < nums1.length; i = i + 1) {
    let num = nums1[i];
    if (seen[num] !== true) {
      seen[num] = true;
      result[resultLen] = num;
      resultLen = resultLen + 1;
    }
  }

  for (let j = 0; j < nums2.length; j = j + 1) {
    let num = nums2[j];
    if (seen[num] !== true) {
      seen[num] = true;
      result[resultLen] = num;
      resultLen = resultLen + 1;
    }
  }

  return result;
}

console.log(findUnionUnique([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]));
