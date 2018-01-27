const findMaxHeight = (input) => {
  let max = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }

  return max;
};