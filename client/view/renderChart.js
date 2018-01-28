const tableContainer = document.getElementById('table-container');

const renderChart = (input, output) => {
  while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
  }

  // if input is empty...

  const maxHeight = findMaxHeight(input) + 1;
  console.log('This is height of our chart', maxHeight);

  // Create a chart
  const chart = document.createElement('table');
  // Create row
  const chartRow = document.createElement('tr');

  for (let i = 0; i < input.length; i++) {
    // Create cell (which will be columns)
    let cell = document.createElement('td');

    for (let j = maxHeight; j > 0; j--) {
      let block = document.createElement('div');
      block.className += 'block';

      if (input[i] >= j) {
        block.className += ' gray-block';
      }

      cell.appendChild(block);
    }

    chartRow.appendChild(cell);
  }

  // input is [1, 5, 3, 5, 1]
  // output is 
    // 1: [1, 2, 0] 
    // 2: [2, 4, 2] If output[key][2] > 0, add blue (after any input[i])
    // 4: [4, 5, 0]
    // most: [2, 4, 2] If key === most, output[key][0] and output[key][1], black blocks

  // Add blue blocks
  // Iterate through hash
  // If output[key][2] > 0, add blue (after any input[i])
    // Iterate through hash[key]
    // hash[key][0] = leftWall -1
    // hash[key][1] = rightWall-1

  for (let key in output) {
    let shorterWall = (input[leftWall] < input[rightWall]) ? leftWall : rightWall;
    for (let i = output[key][0] - 1; i < output[key][1]; i++) {
      let numOfBlueBlocks = input[shorterWall] - input[i];
    }
  }



  // when output is []

  chart.appendChild(chartRow);
  tableContainer.appendChild(chart);

};
