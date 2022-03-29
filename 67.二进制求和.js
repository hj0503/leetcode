/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let sum = '';
  const length = Math.max(a.length, b.length)
  a = a.padStart(length, 0)
  b = b.padStart(length, 0)
  for (let i = length - 1; i >= 0; i--) {
    let currentSum = parseInt(a[i] || 0) + parseInt(b[i] || 0);
    let current = currentSum + carry;
    carry = current > 1 ? 1 : 0;
    sum = current % 2 + sum
  }
  if (carry !== 0) sum = '1' + sum;
  return sum;
};
// @lc code=end
