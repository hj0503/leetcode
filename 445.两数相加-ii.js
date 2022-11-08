/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 栈
  let stack1 = [],
    stack2 = [];
  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  }
  let res = new ListNode();
  let add = 0;
  while (stack1.length || stack2.length) {
    let num = 0;
    num += stack1.length ? stack1.pop() : 0;
    num += stack2.length ? stack2.pop() : 0;
    num += add;
    if (num > 9) {
      add = parseInt(num / 10);
      num = num % 10;
    } else {
      add = 0;
    }
    //头插
    let node = new ListNode(num);
    node.next = res.next;
    res.next = node;
  }
  if (add !== 0) {
    let node = new ListNode(add);
    node.next = res.next;
    res.next = node;
  }
  return res.next;
};
// @lc code=end
