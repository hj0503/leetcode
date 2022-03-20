/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const sArr = s.split('').reverse();
  let num = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== ' ') {
      num += 1;
    }
    if (num && sArr[i] == ' ') {
      break;
    }
  }
  return num;
};
// @lc code=end
