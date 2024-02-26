/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 定义两个指针
  let prev = null, curr = head
  // 循环链表
  while(curr) {
      // 保留一份当前节点的next值, 假如不保存直接反转，curr.next就断掉了，找不到后边数据
      const next = curr.next
      // 反转当前节点
      curr.next = prev
      // 把反转后的当前节点赋值给prev
      prev = curr
      curr = next
  }
  return prev
};