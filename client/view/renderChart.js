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

  // Create rows of maxHeight + 1
  // Each row has an id starting with maxHeight + 1 and decrement
  // Going row by row, using the id
    // 

  // when output is []

  chart.appendChild(chartRow);
  tableContainer.appendChild(chart);

};
