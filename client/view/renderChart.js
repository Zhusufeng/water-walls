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

  console.log(chartRow.children[0].children);
  console.log(chartRow.children[0].children[0].className);
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
        // input[3] - input[2]
        // 5 - 3
        // numo0fBlueBlocks = 2

        // i is the column/wall we want to add blue blocks to

        // Iterate through td's children...

        console.log('maxHeight is ', maxHeight);
        for (let j = 0; j < maxHeight; j++) {
          console.log('j is', j);

          // if (j === 1) {
          //   chartRow.children[i].children[j].className += ' blue-block';
          // }
          console.log('input[i]', input[i]);


          if (j < input[i] && j >= input[i] - numOfBlueBlocks) {
            console.log('I am inside if statement');
            console.log(chartRow.children[i].children[j].className);
            chartRow.children[i].children[j].className += ' blue-block';
          }

          // needs to be colored when j is 1 and 2
        }
      }
    }
  }

  // when output is []

  chart.appendChild(chartRow);
  tableContainer.appendChild(chart);

};
