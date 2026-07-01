//arr= [2, 5, 8, 10]

function transformedArray(arr) {
  let transArr = [];
  for (let i = 0; i < arr.length; i++) {
    transArr.push(arr[i] * 2);
  }
  return transArr;
}

let arr = [11, 5, 8, 10];

console.log(transformedArray(arr));
