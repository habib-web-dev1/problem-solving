function isSubset(arr1, arr2) {
  let counts = {};

  for (let i = 0; i < arr1.length; i = i + 1) {
    let num = arr1[i];
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num] = counts[num] + 1;
    }
  }

  for (let j = 0; j < arr2.length; j = j + 1) {
    let num = arr2[j];

    if (counts[num] === undefined || counts[num] === 0) {
      return false;
    }

    counts[num] = counts[num] - 1;
  }

  return true;
}

console.log(isSubset([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]));
console.log(isSubset([1, 2, 3, 4, 5], [1, 2, 8]));
console.log(isSubset([1, 2, 2, 3], [1, 2, 2, 2]));
