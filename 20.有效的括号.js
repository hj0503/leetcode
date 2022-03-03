/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s % 2) return false;
  const stack = [];
  for (let item of s) {
    switch (item) {
      case '{':
      case '(':
      case '[':
        stack.push(item);
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
    }
  }
  return !stack.length;
};
// @lc code=end
