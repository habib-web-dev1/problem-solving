function countFrequencies(arr) {
  const frequencyMap = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (frequencyMap[num] !== undefined) {
      frequencyMap[num] = frequencyMap[num] + 1;
    } else {
      frequencyMap[num] = 1;
    }
  }

  return frequencyMap;
}

const numbers = [4, 1, 4, 2, 1, 4, 5];
console.log(countFrequencies(numbers));
