const validPair = require('./index');

test('Test 1', () => {
  expect(validPair('()[]{}')).toBeTruthy();
});

test('Test 2', () => {
  expect(validPair('()[]{')).toBeFalsy();
});
