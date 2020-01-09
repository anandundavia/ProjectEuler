const findSum = (from, to) => {
  let sum = 0;
  for (let i = from; i < to; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(findSum(0, 10));
console.log(findSum(0, 1000));
