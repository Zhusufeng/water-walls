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