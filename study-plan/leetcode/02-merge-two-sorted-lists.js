/**
 * LeetCode #21 — 合并两个有序链表
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/merge-two-sorted-lists/
 *
 * 题目：将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 */

/**
 * 方法：双指针 + 哑节点
 * 复杂度：O(n + m) 时间，O(1) 空间
 */
var mergeTwoLists = function(l1, l2) {
  const dummy = { val: 0, next: null };  // 哑节点，简化边界处理
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;  // 拼接剩余部分
  return dummy.next;
};

/**
 * 方法二：递归法
 * 复杂度：O(n + m) 时间，O(n + m) 空间（递归栈）
 */
var mergeTwoListsRecursive = function(l1, l2) {
  // 递归终止条件
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val <= l2.val) {
    l1.next = mergeTwoListsRecursive(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsRecursive(l1, l2.next);
    return l2;
  }
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
  { l1: [1, 2, 4], l2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
  { l1: [], l2: [], expected: [] },
  { l1: [], l2: [0], expected: [0] },
];

console.log('=== 迭代法 ===');
for (const { l1, l2, expected } of testCases) {
  const list1 = arrayToList(l1);
  const list2 = arrayToList(l2);
  const result = listToArray(mergeTwoLists(list1, list2));
  console.log(`l1: [${l1}], l2: [${l2}]`);
  console.log(`输出：[${result}]`);
  console.log(`期望：[${expected}]`);
  console.log(`通过：${JSON.stringify(result) === JSON.stringify(expected)}`);
  console.log('---');
}

console.log('\n=== 递归法 ===');
for (const { l1, l2, expected } of testCases) {
  const list1 = arrayToList(l1);
  const list2 = arrayToList(l2);
  const result = listToArray(mergeTwoListsRecursive(list1, list2));
  console.log(`l1: [${l1}], l2: [${l2}]`);
  console.log(`输出：[${result}]`);
  console.log(`期望：[${expected}]`);
  console.log(`通过：${JSON.stringify(result) === JSON.stringify(expected)}`);
  console.log('---');
}
