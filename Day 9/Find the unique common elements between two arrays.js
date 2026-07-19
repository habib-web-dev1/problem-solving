// nums1 = [4, 9, 5]
// nums2 = [9, 4, 9, 8, 4]

function uniqueCommon(arr1, arr2) {
  let frequencyMap = {};
  let commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (frequencyMap[arr1[i]] !== undefined) {
      frequencyMap[arr1[i]] = frequencyMap[arr1[i]] + 1;
    } else {
      frequencyMap[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let currentElement = arr2[i];
    if (frequencyMap[currentElement] > 0) {
      commonElements.push(currentElement);
      frequencyMap[currentElement] = 0;
    }
  }
  return commonElements;
}
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];

console.log(uniqueCommon(nums1, nums2));
