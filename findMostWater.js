const findMostWater = (heights) => {
  const hash = {};
  let leftWall;
  let rightWall;

  for (let i = 0; i < heights.length; i++) {
    if (i === 0) {
      leftWall = 0;
    }
    if (heights[i] > heights[leftWall]) {
      rightWall = i;
      let sumOfBlocks = countWaterBlocks(leftWall, rightWall, heights, hash);
      
      leftWall = i;
    } else if (i === heights.length - 1) {
      // when left wall is higher, find second highest point
      let secondaryWall;
      for (let j = leftWall + 1; j < heights.length; j++) {
        if (!secondaryWall || heights[j] > heights[secondaryWall]) {
          secondaryWall = j; 
        }
      }
      let sumOfBlocks = countWaterBlocks(leftWall, secondaryWall, heights, hash);

      // Repeat in case there is another!!!

    }
  }
  return findMostBlocks(hash);
};
  
const countWaterBlocks = (leftWall, rightWall, heights, hash) => {
  let sumOfBlocks = 0;
  let shorterWall = (heights[leftWall] < heights[rightWall]) ? leftWall : rightWall;

  for (let i = leftWall + 1; i < rightWall; i++) {
    sumOfBlocks += heights[shorterWall] - heights[i];
  }

  if (sumOfBlocks < 0) {
    sumOfBlocks = 0;
  }
  saveToHash(leftWall, rightWall, sumOfBlocks, hash);
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
  return hash[max][2] > 0 ? hash[max] : [];
};

const saveToHash = (leftWall, rightWall, sumOfBlocks, hash) => {
  hash[leftWall + 1] = [(leftWall + 1), (rightWall + 1), sumOfBlocks];
  return hash; 
}

module.exports = findMostWater;