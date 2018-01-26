const express = require('express');
const bodyParser = require('body-parser');
const processInput = require('./actions/processInput');
const app = express();

const host = 'localhost';
const port = 8234;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.route('/render')
  .post(processInput);

app.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});