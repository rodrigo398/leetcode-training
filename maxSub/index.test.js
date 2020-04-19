const maxSub = require('./index');

test('Test 1 ', () => {
  expect(maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});

test('Test 2', () => {
  expect(maxSub([-2, 1, -3, 4, -1, 2, 1, 7, -5, 4])).toEqual(13);
});
