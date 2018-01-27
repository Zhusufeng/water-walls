# Water Walls


## Main Logic for Part 1

## Description 
A series of wall heights are represented by integers. Determine which two walls have the most water trapped between them, and exactly how much water that is.
Given heights of [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], your function outputs [3, 8, 11]. I.e., between wall #3 and wall #8, there are 11 blocks of water.

### Strategy 
Iterate through given array. If number at future index is greater (or the last tallest), stop and count water blocks. Count water blocks by iterating from left wall to right wall using the difference of shorter wall - current index.

### Big-o
Linear - My solution will iterate through the entire array

### Transformative steps
Given heights [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
Start at index 0 => 5
leftWall = 0
Go to index 1 => 3. It is not greater than heights[leftWall]
Go to index 2 => 7. It is greater than heights[leftWall]
rightWall = 2

findShorterWall(leftWall, rightWall) aka (0, 2)
  if heights[leftWall] < heights[rightWall] return leftWall else return rightWall

Use the shorterWall to count water blocks

countWaterBlocks(leftWall, rightWall, shorterWall) aka (0, 2, 0)
  Iterate through heights from leftWall to rightWall
    sumOfBlocks += heights[shorterWall] - heights[i] (sumOfBlocks += 5 - 3)
  Return sumOfBlocks (which is 2)

Save leftWall + 1, rightWall + 1, and sumOfBlocks in a hash 
  Ie. key = (leftWall + 1) + ' ' + (rightWall + 1);
      hash[key] = sumOfBlocks (hash['1 3'] = 2)

Keep going, leftWall is now 2
Go to index 3 => 2. It is not greater than heights[leftWall]
Go to index 4 => 6. It is not greater than heights[leftWall]
Go to index 5 => 4. It is not greater than heights[leftWall]
Go to index 6 => 5. It is not greater than heights[leftWall]
Go to index 7 => 9. It is greater than heights[leftWall]
rightWall = 7

findShorterWall(leftWall, rightWall) aka (2, 7)
  if heights[leftWall] < heights[rightWall] return leftWall else return rightWall

Use the shorterWall to count water blocks

countWaterBlocks(leftWall, rightWall, shorterWall) aka (2, 7, 2)
  Iterate through heights from leftWall to rightWall
    sumOfBlocks += heights[shorterWall] - heights[i] (sumOfBlocks += 7 - 2)
    sumOfBlocks += heights[shorterWall] - heights[i] (sumOfBlocks += 7 - 6)
    sumOfBlocks += heights[shorterWall] - heights[i] (sumOfBlocks += 7 - 4)
    sumOfBlocks += heights[shorterWall] - heights[i] (sumOfBlocks += 7 - 5)    
  Return sumOfBlocks (which is 11)

Save leftWall + 1, rightWall + 1, and sumOfBlocks in a hash
  Ie. key = (leftWall + 1) + ' ' + (rightWall + 1);
      hash[key] = sumOfBlocks (hash['3 8'] = 11)

Keep going, leftWall is now 7
Go to index 8 => 1. It is not greater than heights[leftWall]
Go to index 9 => 2. It is not greater than heights[leftWall] but it is the last tallest
rightWall = 9

findShorterWall(leftWall, rightWall) aka (7, 9)
  if heights[leftWall] < heights[rightWall] return leftWall else return rightWall

Use the shorterWall to count water blocks

countWaterBlocks(leftWall, rightWall, shorterWall) aka (7, 9, 9)
  Iterate through heights from leftWall to rightWall
    sumOfBlocks += heights[shorterWall] - heights[i] (sumOfBlocks += 2 - 1)  
  Return sumOfBlocks (which is 1)

Save leftWall + 1, rightWall + 1, and sumOfBlocks in a hash
  Ie. key = (leftWall + 1) + ' ' + (rightWall + 1);
      hash[key] = sumOfBlocks (hash['8 10'] = 1)

findMostBlocks(hash)
  Iterate through hash looking for largest value
    Max is '1 3' with 2
    Max is '3 8' with 11
    Last iteration does not update max ('8 10' with 1)
  Return max.split(' ').concat([11])

Use hashMap? new Map()?

### Inputs & Outputs
const input1 = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
const output1 = [3, 8, 11];

const input2 = [5, 1, 2, 3, 4, 3];
const output2 = [1, 5, 6];

const input3 = [5, 4, 3, 2, 1];
const output3 = [];

const input4 = [2, 1, 3, 4, 5];
const output4 = [1, 3, 1];

const input5 = [1];
const output5 = [];

const input6 = [1, 2];
const output6 = [];

### Constraints
N/A

### Function & Helpers
``` javascript
const findMostWater = (heights) => {
  // C: None
  // const hash = {};
  // let leftWall
  // let rightWall

  // Iterate through heights
  //   If index is 0, set leftWall
  //   Find if heights[i] is greater than heights[leftWall] or end
  //     If it is, save i as rightWall
  //     let shorterWall equal to a call to findShorterWall
  //     let sumOfBlocks equal to a call to countWaterBlocks
  //     let key  = (leftWall + 1) + ' ' + (rightWall + 1);
  //     hash[key] = sumOfBlocks 
  //     leftWall = i
  // Return findMostBlocks(hash)
};

const findShorterWall = (leftWall, rightWall, heights) => {
  // If heights[leftWall] is less than heights[rightWall] return leftWall, otherwise rightWall
};
  
const countWaterBlocks = (leftWall, rightWall, shorterWall, heights) => {
  // let sumOfBlocks = 0;
  // Iterate through heights from leftWall to rightWall
  //   sumOfBlocks += heights[shorterWall] - heights[i]
  // Return sumOfBlocks
};

const findMostBlocks = (hash) => {
  // let max = null;
  // Iterate through hash looking for largest value
  //   If hash[key] > hash[max] or no max
  //     max = key
  // Return max.split(' ').concat([hash[max]]) 
};
```