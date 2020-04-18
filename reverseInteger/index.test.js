const reverseInteger = require('./index');

test('Test 1 negative', () => {
  expect(reverseInteger(-321)).toBe(-123);
});

test('Test 2 positive', () => {
  expect(reverseInteger(432)).toEqual('234');
});
