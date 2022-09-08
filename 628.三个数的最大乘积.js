/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  const length = nums.length;
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[length - 1] * nums[length - 2]
  );
};
// @lc code=end
