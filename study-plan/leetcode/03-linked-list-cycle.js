/**
 * LeetCode #141 — 环形链表
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/linked-list-cycle/
 *
 * 题目：给定一个链表，判断链表中是否有环。
 *
 * 示例：
 * 输入：head = [3,2,0,-4], pos = 1（尾部连接到索引 1）
 * 输出：true（链表中有环）
 */

/**
 * 方法：快慢指针（Floyd 判圈算法）
 * 复杂度：O(n) 时间，O(1) 空间
 *
 * 原理：快指针走两步，慢指针走一步，如果有环一定会相遇
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;        // 慢指针走一步
    fast = fast.next.next;   // 快指针走两步
    if (slow === fast) return true;  // 相遇说明有环
  }

  return false;  // fast 到 null 说明无环
};

/**
 * 进阶：找到环的入口节点
 * 复杂度：O(n) 时间，O(1) 空间
 *
 * 原理：快慢指针相遇后，让一个指针从 head 出发，另一个从相遇点出发，
 *       它们会在环的入口相遇
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  // 第一次相遇
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // 找到相遇点，让一个指针从 head 出发
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;  // 环的入口
    }
  }

  return null;  // 无环
};

// ==================== 测试代码 ====================

// 辅助函数：数组转链表（支持环）
function arrayToList(arr, pos = -1) {
  const dummy = { val: 0, next: null };
  let curr = dummy;
  let cycleNode = null;

  for (let i = 0; i < arr.length; i++) {
    curr.next = { val: arr[i], next: null };
    curr = curr.next;
    if (i === pos) {
      cycleNode = curr;
    }
  }

  // 如果有环，尾部连接到指定位置
  if (pos >= 0 && cycleNode) {
    curr.next = cycleNode;
  }

  return dummy.next;
}

// 测试 hasCycle
console.log('=== 检测环形链表 ===');
const testCases1 = [
  { input: [3, 2, 0, -4], pos: 1, expected: true },
  { input: [1, 2], pos: 0, expected: true },
  { input: [1], pos: -1, expected: false },
  { input: [], pos: -1, expected: false },
];

for (const { input, pos, expected } of testCases1) {
  const head = arrayToList(input, pos);
  const result = hasCycle(head);
  console.log(`输入：[${input}], pos = ${pos}`);
  console.log(`输出：${result}`);
  console.log(`期望：${expected}`);
  console.log(`通过：${result === expected}`);
  console.log('---');
}

// 测试 detectCycle
console.log('\n=== 找环的入口 ===');
const testCases2 = [
  { input: [3, 2, 0, -4], pos: 1, expectedVal: 2 },
  { input: [1, 2], pos: 0, expectedVal: 1 },
  { input: [1], pos: -1, expectedVal: null },
];

for (const { input, pos, expectedVal } of testCases2) {
  const head = arrayToList(input, pos);
  const result = detectCycle(head);
  const resultVal = result ? result.val : null;
  console.log(`输入：[${input}], pos = ${pos}`);
  console.log(`输出：${resultVal}`);
  console.log(`期望：${expectedVal}`);
  console.log(`通过：${resultVal === expectedVal}`);
  console.log('---');
}
