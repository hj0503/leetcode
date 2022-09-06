/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let count = 0;
  // [1, 2, 3, 4, 5] 5
  for (let i = 0; i < timeSeries.length; i++) {
    // 每一次攻击的中毒秒数为
    // 如果下一次攻击时间减去当前攻击时间大于持续时间或者是最后一次，那么这次的中毒时间为持续时间
    // 否则这次的中毒时间为下次攻击时间减去当前攻击时间
    if (
      i === timeSeries.length - 1 ||
      timeSeries[i + 1] - timeSeries[i] >= duration
    ) {
      count += duration;
    } else {
      count += timeSeries[i + 1] - timeSeries[i];
    }
  }
  return count;
};
// @lc code=end
