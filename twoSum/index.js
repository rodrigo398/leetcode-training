const twoSum = (nums, target) => {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (cache[target - n] != null) {
      return [cache[target - n], i];
    }

    cache[n] = i;
  }
};

module.exports = twoSum;
