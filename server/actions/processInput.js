const findMostWater = require('../logic/findMostWater');

const processInput = (req, res) => {
  console.log(req.body.input);
  const heights = cleanUpInput(req.body.input);

  const answer = { output: findMostWater(heights) };
  res.status(201).send(answer);
};

const cleanUpInput = (string) => {
  const clean = string.split(',');
  return clean.map(chunk => {
    return parseInt(chunk);
  });
};

module.exports = processInput;