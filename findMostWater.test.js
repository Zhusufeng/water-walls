const findMostWater = require('./findMostWater');

test('findMostWater works', () => {
  expect(findMostWater([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
  expect(findMostWater([5, 1, 2, 3, 4, 3])).toEqual([1, 5, 6]); // not hitting 4
  expect(findMostWater([2, 1, 3, 4, 5])).toEqual([1, 3, 1]); 
  expect(findMostWater([5, 4, 3, 2, 1])).toEqual([]); 
  expect(findMostWater([1])).toEqual([]); 
  expect(findMostWater([1, 2])).toEqual([]); 
});