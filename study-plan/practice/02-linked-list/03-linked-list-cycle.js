/**
 * =====================================================
 * #141 环形链表
 * =====================================================
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/linked-list-cycle/
 *
 * 题目：
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中存在环，则返回 true；否则返回 false。
 *
 * 示例：
 * 输入：head = [3,2,0,-4], pos = 1（尾部连接到索引 1）
 * 输出：true
 *
 * =====================================================
 * 方法讲解：快慢指针（Floyd 判圈算法）
 * =====================================================
 *
 * 画面锚：操场跑步
 * 两个人在操场跑步，一个跑得快，一个跑得慢。
 * 如果是直道，快的人先到终点。
 * 如果是环形跑道，快的人一定会追上慢的人（套圈）。
 *
 * 步骤：
 * 1. slow 每次走一步：slow = slow.next
 * 2. fast 每次走两步：fast = fast.next.next
 * 3. 如果有环，slow 和 fast 一定会相遇
 * 4. 如果 fast 到达 null，说明无环
 *
 * =====================================================
 * 你的任务：在下方写出你的代码
 * =====================================================
 */

// 链表节点定义（不用修改）
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var hasCycle = function(head) {
    // 在这里写你的代码
    // 提示：
    // 1. let slow = head, fast = head
    // 2. while (fast && fast.next) {
    //        slow = slow.next;
    //        fast = fast.next.next;
    //        if (slow === fast) return true;
    //    }
    // 3. return false

};

// =====================================================
// 测试代码（不用修改）
// =====================================================

// 创建带环的链表
function createCycleList(arr, pos) {
    const dummy = new ListNode(0);
    let curr = dummy;
    let cycleNode = null;

    for (let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
        if (i === pos) {
            cycleNode = curr;
        }
    }

    if (pos >= 0 && cycleNode) {
        curr.next = cycleNode;
    }

    return dummy.next;
}

function test() {
    const testCases = [
        { input: [3, 2, 0, -4], pos: 1, expected: true },
        { input: [1, 2], pos: 0, expected: true },
        { input: [1], pos: -1, expected: false },
        { input: [], pos: -1, expected: false },
    ];

    let allPassed = true;

    for (const { input, pos, expected } of testCases) {
        const head = createCycleList(input, pos);
        const result = hasCycle(head);

        if (result !== expected) {
            console.log(`❌ 输入：[${input}], pos = ${pos}`);
            console.log(`   期望：${expected}，实际：${result}`);
            allPassed = false;
        } else {
            console.log(`✅ 输入：[${input}], pos = ${pos} → ${result}`);
        }
    }

    console.log(allPassed ? '\n🎉 全部通过！' : '\n❌ 有测试未通过');
}

test();
