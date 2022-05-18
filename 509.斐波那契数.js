/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, current = 0, next = 1) {
  if (n === 1) return next
  if (n === 0) return 0
  return fib(n - 1, next, current + next)
};
// @lc code=end

