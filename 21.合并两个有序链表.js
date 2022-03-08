/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const prehead = new ListNode(0);
  let pre = prehead;
  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      pre.next = list1;
      list1 = list1.next;
    } else {
      pre.next = list2;
      list2 = list2.next;
    }
    pre = pre.next;
  }
  pre.next = list1 === null ? list2 : list1;

  return prehead.next;
};

//循环开始
// 1、prehead: 0->1->2->4;  prev: 1->2->4;  list1: 2->4;  list2: 1->3->4
// 2、prehead: 0->1->1->3->4;  prev: 1->3->4;  list1: 2->4;  list2: 3->4
// 3、prehead: 0->1->1->2->4;  prev: 2->4;  list1: 4;  list2: 3->4
// 4、prehead: 0->1->1->2->3->4;  prev: 3->4;  list1: 44;  list2: 4
// 5、prehead: 0->1->1->2->3->4;  prev: 4;  list1: null;  list2: 4
// 循环结束
// pre.next = list1 === null ? list2 : list1;
// prehead:  0->1->1->2->3->4->4;  prev: 4->4
// 输出: 1->1->2->3->4->4
// @lc code=end
