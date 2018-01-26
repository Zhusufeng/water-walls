const findMostWater = (heights) => {
  const hash = {};
  let leftWall;
  let rightWall;

  for (let i = 0; i < heights.length; i++) {
    if (i === 0) {
      leftWall = 0;
    }
    if (heights[i] > heights[leftWall] || i === heights.length - 1) {
      rightWall = i;
      let sumOfBlocks = countWaterBlocks(leftWall, rightWall, heights);
      hash[leftWall + 1] = [(leftWall + 1), (rightWall + 1), sumOfBlocks]; 
      leftWall = i;
    }
  }
  return findMostBlocks(hash);
};
  
const countWaterBlocks = (leftWall, rightWall, heights) => {
  let sumOfBlocks = 0;
  let shorterWall = (heights[leftWall] < heights[rightWall]) ? leftWall : rightWall;

  for (let i = leftWall + 1; i < rightWall; i++) {
    sumOfBlocks += heights[shorterWall] - heights[i];
  }
  return sumOfBlocks;
};

const findMostBlocks = (hash) => {
  let max = null;
  for (key in hash) {
    console.log(hash[key]);
    if (!max || hash[key][2] > hash[max][2]) {
      max = key;
    }
  }
  return hash[max];
};

module.exports = findMostWater;