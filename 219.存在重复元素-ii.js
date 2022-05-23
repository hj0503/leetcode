/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let key in nums) {
    const value = nums[key]
    if (map.has(value) && (key - map.get(value) <= k)) {
      return true
    }
    map.set(value, key)
  }
  return false;
};
// @lc code=end
