/**
 * 链表 — 手写实现
 * 画面锚：寻宝接力（每张纸片知道下一张在哪）
 */

// ==================== 节点定义 ====================
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ==================== 链表类 ====================
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 头部插入 O(1)
  prepend(val) {
    const node = new ListNode(val, this.head);
    this.head = node;
    this.size++;
  }

  // 尾部插入 O(n)
  append(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  // 删除指定值 O(n)
  delete(val) {
    if (!this.head) return false;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let curr = this.head;
    while (curr.next) {
      if (curr.next.val === val) {
        curr.next = curr.next.next;
        this.size--;
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  // 查找 O(n)
  find(val) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.val === val) return index;
      curr = curr.next;
      index++;
    }
    return -1;
  }

  // 转数组（方便调试）
  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }

  // 打印
  print() {
    console.log(this.toArray().join(' -> ') + ' -> null');
  }
}

// ==================== 经典操作 ====================

/**
 * 反转链表 — 三指针法
 * 口诀：存 → 转 → 移 → 移
 * 复杂度：O(n) 时间，O(1) 空间
 */
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;  // ① 存住 next
    current.next = prev;        // ② 反转指针
    prev = current;             // ③ prev 前进
    current = next;             // ④ current 前进
  }

  return prev;  // 新头节点
}

/**
 * 合并两个有序链表 — 双指针 + 哑节点
 * 复杂度：O(n + m) 时间，O(1) 空间
 */
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);  // 哑节点，简化边界处理
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
}

/**
 * 检测环形链表 — 快慢指针
 * 复杂度：O(n) 时间，O(1) 空间
 */
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;        // 慢指针走一步
    fast = fast.next.next;   // 快指针走两步
    if (slow === fast) return true;  // 相遇说明有环
  }

  return false;
}

/**
 * 找链表中间节点 — 快慢指针
 * 复杂度：O(n) 时间，O(1) 空间
 */
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;  // slow 就是中间节点
}

/**
 * 删除倒数第 N 个节点 — 双指针
 * 复杂度：O(n) 时间，O(1) 空间
 */
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  // fast 先走 n + 1 步
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // fast 和 slow 一起走
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // slow.next 就是要删除的节点
  slow.next = slow.next.next;
  return dummy.next;
}

// ==================== 测试代码 ====================

// 测试反转链表
console.log('=== 反转链表 ===');
const list1 = new LinkedList();
[1, 2, 3, 4, 5].forEach(v => list1.append(v));
console.log('原始：');
list1.print();
list1.head = reverseList(list1.head);
console.log('反转后：');
list1.print();

// 测试合并有序链表
console.log('\n=== 合并有序链表 ===');
const l1 = new LinkedList();
[1, 3, 5].forEach(v => l1.append(v));
const l2 = new LinkedList();
[2, 4, 6].forEach(v => l2.append(v));
console.log('l1:', l1.toArray().join(' -> '));
console.log('l2:', l2.toArray().join(' -> '));
const merged = mergeTwoLists(l1.head, l2.head);
const mergedList = new LinkedList();
mergedList.head = merged;
console.log('合并后：');
mergedList.print();

// 测试检测环
console.log('\n=== 检测环形链表 ===');
const cycleList = new LinkedList();
[1, 2, 3, 4].forEach(v => cycleList.append(v));
console.log('无环：', hasCycle(cycleList.head));
// 制造环：4 -> 2
cycleList.head.next.next.next.next = cycleList.head.next;
console.log('有环：', hasCycle(cycleList.head));

// 测试找中间节点
console.log('\n=== 找中间节点 ===');
const list2 = new LinkedList();
[1, 2, 3, 4, 5].forEach(v => list2.append(v));
const mid = middleNode(list2.head);
console.log('中间节点值：', mid.val);  // 3

// 测试删除倒数第 N 个
console.log('\n=== 删除倒数第 N 个 ===');
const list3 = new LinkedList();
[1, 2, 3, 4, 5].forEach(v => list3.append(v));
console.log('原始：');
list3.print();
list3.head = removeNthFromEnd(list3.head, 2);
console.log('删除倒数第 2 个后：');
list3.print();
