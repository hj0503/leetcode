/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const newNums = [...new Set(nums)];
  newNums.sort((a, b) => b - a);
  if (newNums.length < 3) {
    return newNums[0];
  }
  return newNums[2];
};
// @lc code=end
