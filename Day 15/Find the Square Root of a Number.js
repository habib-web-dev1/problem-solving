function mySqrt(n) {
  if (n < 2) {
    return n;
  }

  let left = 1;
  let right = Math.floor(n / 2);
  let ans = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let square = mid * mid;

    if (square === n) {
      return mid;
    }

    if (square < n) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(0));
console.log(mySqrt(16));
