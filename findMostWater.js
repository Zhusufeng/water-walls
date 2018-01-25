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
      let shorterWall = findShorterWall(leftWall, rightWall, heights);
      let sumOfBlocks = countWaterBlocks(leftWall, rightWall, shorterWall, heights);
      hash[leftWall + 1] = [(leftWall + 1), (rightWall + 1), sumOfBlocks]; 
      leftWall = i;
    }
  }
  return findMostBlocks(hash);
};

const findShorterWall = (leftWall, rightWall, heights) => {
  if (heights[leftWall] < heights[rightWall]) {
    return leftWall;
  }
  return rightWall;
};
  
const countWaterBlocks = (leftWall, rightWall, shorterWall, heights) => {
  let sumOfBlocks = 0;
  for (let i = leftWall; i < rightWall; i++) {
    sumOfBlocks += heights[shorterWall] - heights[i];
  }
  return sumOfBlocks;
};

const findMostBlocks = (hash) => {
  let max = null;
  for (key in hash) {
    if (!max || hash[key][2] > hash[max][2]) {
      max = key;
    }
  }
  return hash[max];
};

module.exports = findMostWater;