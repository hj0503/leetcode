/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans = 0;
  let n = s.length;
  for (let i = 0; i < n; ++i) {
    let value = map[s[i]];
    if (i < n - 1 && value < map[s[i + 1]]) {
      ans -= value;
    } else {
      ans += value;
    }
  }
  return ans;
};
// @lc code=end
