/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

module.exports.twoSum = (nums, target) => {
  let hasFoundSolution;
  let result;

  nums.forEach((item, topIndex) => {
    const otherNums = [...nums];
    otherNums[topIndex] = null;

    otherNums.forEach((otherNum, botIndex) => {
      if (otherNum !== null && item + otherNum === target && !hasFoundSolution) {
        hasFoundSolution = true;
        result = [topIndex, botIndex];
        console.log('RESULT:', result)
        return result
      }
    });
  });

  return result;
};