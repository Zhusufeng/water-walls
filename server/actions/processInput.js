const findMostWater = require('../logic/findMostWater');

const processInput = (req, res) => {
  console.log(req.body.input);
  const answer = { output: findMostWater(req.body.input) };
  res.status(201).send(answer);
};

module.exports = processInput;