const tableContainer = document.getElementById('table-container');

const renderChart = (input, output) => {
  while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
  }

  // TODO: account for when input is []

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

      if (i === 0) {
        let number = document.createTextNode(j); 
        // add the text node to the newly created div
        block.appendChild(number);  
      }
      cell.appendChild(block);
    }
    chartRow.appendChild(cell);
  }

  // Add blue blocks in correct ranges
  for (let key in output) {
    if (output[key][2] > 0 && key !== 'most') {
      let shorterWall = (input[output[key][0] - 1] < input[output[key][1] - 1]) ? output[key][0] - 1 : output[key][1] - 1;
      for (let i = output[key][0]; i < output[key][1] - 1; i++) {
        let numOfBlueBlocks = input[shorterWall] - input[i];
        let bottomIndex = maxHeight - input[i];
        let topIndex = maxHeight - (input[i] + numOfBlueBlocks);

        for (let j = 0; j < maxHeight; j++) {
          if (j < bottomIndex && j >= topIndex){
            chartRow.children[i].children[j].className += ' blue-block';
          }
        }
      }
    }
  }
  // Add black blocks in correct ranges

  chart.appendChild(chartRow);
  tableContainer.appendChild(chart);

};
