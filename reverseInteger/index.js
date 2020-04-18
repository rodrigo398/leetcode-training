const reverseInteger = n => {
  if (n < 0) return -1 * reverseInteger(-n);

  const result = n.toString().split('').reverse().join('');

  return result > 2 ** 31 - 1 ? 0 : result;
};

module.exports = reverseInteger;
