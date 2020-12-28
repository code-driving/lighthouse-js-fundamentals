const range = function (start, end, step) {
  let numbers = [];

  for (let i = start; i <= end; i += step) {
    if (start !== undefined && end !== undefined && step !== undefined) {
      if (start < end && step > 0) {
        numbers.push(i);
      }
    } else return [];
  }
  return numbers;
};
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(31, 30, 5));
