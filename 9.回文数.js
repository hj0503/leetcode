/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reverse = x.toString().split("").reverse()
  const reverseStr = Number(reverse.join(""))
  return reverseStr === x
};
// @lc code=end

