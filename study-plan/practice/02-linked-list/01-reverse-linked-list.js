/**
 * =====================================================
 * #206 反转链表
 * =====================================================
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/reverse-linked-list/
 *
 * 题目：
 * 给定单链表的头节点 head，请反转链表，并返回反转后的链表。
 *
 * 示例：
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 * 输入：head = [1,2]
 * 输出：[2,1]
 *
 * =====================================================
 * 方法讲解：三指针法
 * =====================================================
 *
 * 画面锚：寻宝接力
 * 你站在 A，要把 A 的 next 从指向 B 改成指向 null。
 * 但改之前你得先记住 B 在哪，否则 B 就丢了。
 *
 * 口诀：存 → 转 → 移 → 移
 *
 * 1. 存：const next = current.next（存住下一步）
 * 2. 转：current.next = prev（反转指针）
 * 3. 移：prev = current（prev 前进）
 * 4. 移：current = next（current 前进）
 *
 * 初始值：prev = null, current = head
 * 循环条件：while (current)
 * 返回值：return prev（新头节点）
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

var reverseList = function(head) {
    // 在这里写你的代码
    // 提示：
    // 1. let prev = null, current = head
    // 2. while (current) {
    //        const next = current.next;
    //        current.next = prev;
    //        prev = current;
    //        current = next;
    //    }
    // 3. return prev

};

// =====================================================
// 测试代码（不用修改）
// =====================================================

// 数组转链表
function arrayToList(arr) {
    const dummy = new ListNode(0);
    let curr = dummy;
    for (const val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// 链表转数组
function listToArray(head) {
    const result = [];
    let curr = head;
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

function test() {
    const testCases = [
        { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
        { input: [1, 2], expected: [2, 1] },
        { input: [], expected: [] },
        { input: [1], expected: [1] },
    ];

    let allPassed = true;

    for (const { input, expected } of testCases) {
        const head = arrayToList(input);
        const result = listToArray(reverseList(head));

        if (JSON.stringify(result) !== JSON.stringify(expected)) {
            console.log(`❌ 输入：[${input}]`);
            console.log(`   期望：[${expected}]，实际：[${result}]`);
            allPassed = false;
        } else {
            console.log(`✅ 输入：[${input}] → [${result}]`);
        }
    }

    console.log(allPassed ? '\n🎉 全部通过！' : '\n❌ 有测试未通过');
}

test();
