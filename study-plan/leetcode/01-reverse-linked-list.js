/**
 * LeetCode #206 — 反转链表
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/reverse-linked-list/
 *
 * 题目：给定单链表的头节点 head，请反转链表，并返回反转后的链表。
 *
 * 示例：
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */

/**
 * 方法一：迭代法（三指针法）
 * 复杂度：O(n) 时间，O(1) 空间
 * 口诀：存 → 转 → 移 → 移
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;  // ① 存住 next
    current.next = prev;        // ② 反转指针
    prev = current;             // ③ prev 前进
    current = next;             // ④ current 前进
  }

  return prev;  // 新头节点
};

/**
 * 方法二：递归法
 * 复杂度：O(n) 时间，O(n) 空间（递归栈）
 */
var reverseListRecursive = function(head) {
  // 递归终止条件
  if (!head || !head.next) {
    return head;
  }

  // 递归反转后面的链表
  const newHead = reverseListRecursive(head.next);

  // 反转当前节点
  head.next.next = head;
  head.next = null;

  return newHead;
};

// ==================== 测试代码 ====================

// 辅助函数：数组转链表
function arrayToList(arr) {
  const dummy = { val: 0, next: null };
  let curr = dummy;
  for (const val of arr) {
    curr.next = { val, next: null };
    curr = curr.next;
  }
  return dummy.next;
}

// 辅助函数：链表转数组
function listToArray(head) {
  const result = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

// 测试
const testCases = [
  { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
  { input: [1, 2], expected: [2, 1] },
  { input: [], expected: [] },
];

console.log('=== 迭代法 ===');
for (const { input, expected } of testCases) {
  const head = arrayToList(input);
  const result = listToArray(reverseList(head));
  console.log(`输入：[${input}]`);
  console.log(`输出：[${result}]`);
  console.log(`期望：[${expected}]`);
  console.log(`通过：${JSON.stringify(result) === JSON.stringify(expected)}`);
  console.log('---');
}

console.log('\n=== 递归法 ===');
for (const { input, expected } of testCases) {
  const head = arrayToList(input);
  const result = listToArray(reverseListRecursive(head));
  console.log(`输入：[${input}]`);
  console.log(`输出：[${result}]`);
  console.log(`期望：[${expected}]`);
  console.log(`通过：${JSON.stringify(result) === JSON.stringify(expected)}`);
  console.log('---');
}
