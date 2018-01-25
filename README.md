# Water Walls
A series of wall heights are represented by integers. Determine which two walls have the most water trapped between them, and exactly how much water that is.
Given heights of [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], your function outputs [3, 8, 11]. I.e., between wall #3 and wall #8, there are 11 blocks of water.

## Main Logic

### Strategy 
Iterate through given array. If number at future index is greater (or the last tallest), stop and count water blocks. Count water blocks by iterating from left tower to right tower using the difference of shorter tower - current index.

### Big-o
Linear - My solution will iterate through the entire array

### Transformative steps
Given [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]

### Inputs & Outputs
const input1 = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
const output1 = [3, 8, 11];

const input2 = [5, 1, 2, 3, 4, 3];
const output2 = [1, 5, 6];

const input3 = [5, 4, 3, 2, 1];
const output3 = [];

const input4 = [2, 1, 3, 4, 5];
const output4 = [1, 3, 1];

### Constraints
N/A

### Main Function