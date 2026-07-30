function totalFruit(fruits) {
  let left = 0;
  let maxFruits = 0;
  let distinctTypes = 0;

  const basket = {};

  for (let right = 0; right < fruits.length; right = right + 1) {
    const currentFruit = fruits[right];

    if (basket[currentFruit] === undefined || basket[currentFruit] === 0) {
      basket[currentFruit] = 1;
      distinctTypes = distinctTypes + 1;
    } else {
      basket[currentFruit] = basket[currentFruit] + 1;
    }

    while (distinctTypes > 2) {
      const leftFruit = fruits[left];
      basket[leftFruit] = basket[leftFruit] - 1;

      if (basket[leftFruit] === 0) {
        distinctTypes = distinctTypes - 1;
      }

      left = left + 1;
    }

    let currentWindowLength = right - left + 1;
    if (currentWindowLength > maxFruits) {
      maxFruits = currentWindowLength;
    }
  }

  return maxFruits;
}

console.log(totalFruit([0, 2, 2, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 34]));
