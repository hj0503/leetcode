/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 快慢指针在环形情况下总会相遇
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;

  // 保存当前指针法
  // const map = new Map();
  // while (head) {
  //   if (map.has(head)) {
  //     return true;
  //   }
  //   map.set(head, true);
  //   head = head.next;
  // }
  // return false;
};
// @lc code=end
