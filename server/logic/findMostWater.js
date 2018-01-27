const findMostWater = (heights, leftWall = 0, rightWall = null, hash = {}) => {
  if (!heights.length) return [];
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
  if (!heights[leftWall + 1]) {
    let sumOfBlocks = countWaterBlocks(leftWall, anotherWall, heights, hash);
    return;
  }
  for (let j = leftWall + 1; j < heights.length; j++) {
    console.log(heights[j]);
    if (!anotherWall || heights[j] > heights[anotherWall]) {
      anotherWall = j; 
    }
  }
  let sumOfBlocks = countWaterBlocks(leftWall, anotherWall, heights, hash);
  if (anotherWall === heights.length - 1) {
    return;
  }
  console.log(anotherWall);
  findAnotherWall(hash, anotherWall, heights);
};
// Mesh findMostWater and findAnotherWall into 1 function...
  
const countWaterBlocks = (leftWall, rightWall, heights, hash) => {
  let sumOfBlocks = 0;
  let shorterWall = (heights[leftWall] < heights[rightWall]) ? leftWall : rightWall;

  for (let i = leftWall + 1; i < rightWall; i++) {
    sumOfBlocks += heights[shorterWall] - heights[i];
  }
  if (sumOfBlocks < 0) sumOfBlocks = 0;
  
  hash[leftWall + 1] = [(leftWall + 1), (rightWall + 1), sumOfBlocks];
  return sumOfBlocks;
};

const findMostBlocks = (hash) => {
  let max = null;
  console.log('hash is', hash);
  for (key in hash) {
    console.log(hash[key]);
    if (!max || hash[key][2] > hash[max][2]) {
      max = key;
    }
  }

  if (hash[max][2] > 0) {
    hash.most = hash[max];
  } else {
    hash.most = [];
  }

  return hash;
};

module.exports = findMostWater;