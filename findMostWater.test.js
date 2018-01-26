const findMostWater = require('./findMostWater');

test('findMostWater works when right wall is higher', () => {
  expect(findMostWater([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toEqual([3, 8, 11]);
  expect(findMostWater([2, 1, 3, 4, 5])).toEqual([1, 3, 1]); 
});

test('findMostWater works when left wall is higher', () => {
  expect(findMostWater([5, 1, 2, 3, 4, 3])).toEqual([1, 5, 6]); 
  expect(findMostWater([1, 1, 6, 1, 5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4]).toEqual([5, 15, 26]));
});

test('findMostWater works when there is no wall', () => {
  expect(findMostWater([5, 4, 3, 2, 1])).toEqual([]); 
  expect(findMostWater([1])).toEqual([]); 
  expect(findMostWater([1, 2])).toEqual([]); 
});