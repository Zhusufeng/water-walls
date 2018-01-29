const tableContainer = document.getElementById('table-container');

const renderChart = (input, output) => {
  while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
  }

  // if input is []

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

  console.log(chartRow.children[0].children);
  console.log(chartRow.children[0].children[0].className);

  for (let key in output) {
    console.log(output[key]);
    if (output[key][2] > 0 && key !== 'most') {
      console.log(' i am inside ');
      let shorterWall = (input[output[key][0]] < input[output[key][1]]) ? output[key][0] - 1 : output[key][1] - 1;
      console.log('shorterWall is index ', shorterWall);
      for (let i = output[key][0]; i < output[key][1] - 1; i++) {
        console.log('i is', i);
        console.log('input[shorterWall] is', input[shorterWall]);
        console.log('input[i] is', input[i]);

        let numOfBlueBlocks = input[shorterWall] - input[i];
        console.log('numOfBlueBlocks is ', numOfBlueBlocks);

        for (let j = 0; j < maxHeight; j++) {
          console.log('j is', j); // 0 1 2 3 4 5...

          console.log('input[i]', input[i]);


          if (j < (maxHeight - input[i]) && (j >= maxHeight - (input[i] + numOfBlueBlocks))) {
            console.log('I am inside if statement');
            console.log(chartRow.children[i].children[j].className);
            chartRow.children[i].children[j].className += ' blue-block';
          }

          // needs to be colored when j is 1 and 2
        }
      }
    }
  }

  chart.appendChild(chartRow);
  tableContainer.appendChild(chart);

};
