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
      let key = (leftWall + 1) + ' ' + (rightWall + 1);
      hash[key] = sumOfBlocks;
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