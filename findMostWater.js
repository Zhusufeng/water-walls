const findMostWater = (heights, leftWall = 0, rightWall = null, hash = {}) => {

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > heights[leftWall]) {
      rightWall = i;
      let sumOfBlocks = countWaterBlocks(leftWall, rightWall, heights, hash);
      
      leftWall = i;
    } else if (i === heights.length - 1) {
      // when left wall is higher, find second highest point
      findAnotherWall(hash, leftWall, heights);
    }
  }
  return findMostBlocks(hash);
};

const findAnotherWall = (hash, leftWall, heights, anotherWall = null) => {
  for (let j = leftWall + 1; j < heights.length; j++) {
    if (!anotherWall || heights[j] > heights[anotherWall]) {
      anotherWall = j; 
    }
  }
  let sumOfBlocks = countWaterBlocks(leftWall, anotherWall, heights, hash);
  if (anotherWall === heights.length - 1) {
    return;
  }
  findAnotherWall(hash, anotherWall, heights);
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