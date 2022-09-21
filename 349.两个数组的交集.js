/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const data = [];
  nums1.forEach(item => {
    if (nums2.includes(item) && !data.includes(item)) {
      data.push(item);
    }
  });
  return data;
};
// @lc code=end
