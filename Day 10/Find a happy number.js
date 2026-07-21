function isHappy(n) {
  let slow = n;
  let fast = n;

  let temp = fast;
  let sum = 0;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit;
    temp = (temp - digit) / 10;
  }
  fast = sum;

  while (fast !== 1 && slow !== fast) {
    temp = slow;
    sum = 0;
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit * digit;
      temp = (temp - digit) / 10;
    }
    slow = sum;

    for (let step = 0; step < 2; step++) {
      temp = fast;
      sum = 0;
      while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit;
        temp = (temp - digit) / 10;
      }
      fast = sum;
    }
  }

  return fast === 1;
}

console.log(isHappy(20));
console.log(isHappy(2));
console.log(isHappy(7));
