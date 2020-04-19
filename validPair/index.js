const validPair = s => {
  const pair = { '(': ')', '[': ']', '{': '}' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (pair[s[i]]) {
      stack.push(s[i]);
    } else if (s[i] !== pair[stack.pop()]) {
      return false;
    }

    if (stack.length > s.length - i) {
      return false;
    }
  }
  return stack.length ? false : true;
};

module.exports = validPair;
