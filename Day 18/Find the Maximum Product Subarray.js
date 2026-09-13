function maxProduct(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let globalMax = nums[0];
  let maxProd = nums[0];
  let minProd = nums[0];

  for (let i = 1; i < nums.length; i = i + 1) {
    let current = nums[i];

    if (current < 0) {
      let temp = maxProd;
      maxProd = minProd;
      minProd = temp;
    }

    let tempMax = maxProd * current;
    if (current > tempMax) {
      maxProd = current;
    } else {
      maxProd = tempMax;
    }

    let tempMin = minProd * current;
    if (current < tempMin) {
      minProd = current;
    } else {
      minProd = tempMin;
    }

    if (maxProd > globalMax) {
      globalMax = maxProd;
    }
  }

  return globalMax;
}

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2, 3, -4]));
console.log(maxProduct([-2]));
