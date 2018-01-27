const tableContainer = document.getElementById('table-container');

const renderChart = (input, output) => {
  while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
  }

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
  // output is [2, 4, 2]
  // if input[output[0] - 1] or input[output[1] - 1] should be ' black-block' (not gray-block)
  // all blue blocks need to be shown!!!

  // when output is []

  chart.appendChild(chartRow);
  tableContainer.appendChild(chart);

};
