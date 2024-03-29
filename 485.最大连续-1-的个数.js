/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax += 1;
    }
    if (nums[i + 1] !== 1) {
      max = Math.max(max, currentMax);
      currentMax = 0;
    }
  }
  return max;
};
// @lc code=end
