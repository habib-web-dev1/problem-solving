//arr=[-3, 8, -5, 10, 0, 12]

function filterPos(arr) {
  let filteredNumb = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      filteredNumb.push(arr[i]);
    }
  }
  return filteredNumb;
}
let arr = [-3, -8, -5, 10, 0, 12];

console.log(filterPos(arr));
