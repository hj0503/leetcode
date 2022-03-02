/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let strsMaxLen = 0;
  let str = '';
  strs.forEach(item => {
    if (item.length > strsMaxLen) {
      strsMaxLen = item.length;
    }
  });
  for (let i = 0; i < strsMaxLen; i++) {
    let currentStr = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (currentStr !== strs[j][i]) {
        return str;
      }
    }
    str += currentStr;
    if (str === '') {
      return str;
    }
  }
  return str;

  // 排序是为了相同字符是长度问题 例如["aaa", "a", "aa"]
  // var longestCommonPrefix = function (strs) {
  //   if (strs.length <= 1) return strs[0];
  //   strs.sort();
  //   let len = strs[0].length;
  //   let i;
  //   for (i = 0; i < len; i++) {
  //     if (strs[strs.length - 1].charAt(i) !== strs[0].charAt(i)) break;
  //   }
  //   if (i < 1) return '';
  //   return strs[0].substring(0, i);
  // };
};
// @lc code=end
