/**
 * =====================================================
 * #21 合并两个有序链表
 * =====================================================
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/merge-two-sorted-lists/
 *
 * 题目：
 * 将两个升序链表合并为一个新的升序链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 *
 * =====================================================
 * 方法讲解：双指针 + 哑节点
 * =====================================================
 *
 * 画面锚：拉拉链
 * 两个链表像两条拉链，每次把小的那个拉下来接到结果链表上。
 *
 * 哑节点（Dummy Node）的作用：
 * - 简化边界处理，不用单独处理头节点
 * - dummy.next 就是真正的头节点
 *
 * 步骤：
 * 1. 创建哑节点 dummy
 * 2. curr 指向 dummy
 * 3. while (l1 && l2)，比较大小，把小的接到 curr.next
 * 4. 循环结束后，把剩余的部分接到 curr.next
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

var mergeTwoLists = function(l1, l2) {
    // 在这里写你的代码
    // 提示：
    // 1. const dummy = new ListNode(0)
    // 2. let curr = dummy
    // 3. while (l1 && l2) {
    //        if (l1.val <= l2.val) {
    //            curr.next = l1;
    //            l1 = l1.next;
    //        } else {
    //            curr.next = l2;
    //            l2 = l2.next;
    //        }
    //        curr = curr.next;
    //    }
    // 4. curr.next = l1 || l2
    // 5. return dummy.next

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
        { l1: [1, 2, 4], l2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
        { l1: [], l2: [], expected: [] },
        { l1: [], l2: [0], expected: [0] },
        { l1: [1, 3, 5], l2: [2, 4, 6], expected: [1, 2, 3, 4, 5, 6] },
    ];

    let allPassed = true;

    for (const { l1, l2, expected } of testCases) {
        const list1 = arrayToList(l1);
        const list2 = arrayToList(l2);
        const result = listToArray(mergeTwoLists(list1, list2));

        if (JSON.stringify(result) !== JSON.stringify(expected)) {
            console.log(`❌ l1=[${l1}], l2=[${l2}]`);
            console.log(`   期望：[${expected}]，实际：[${result}]`);
            allPassed = false;
        } else {
            console.log(`✅ l1=[${l1}], l2=[${l2}] → [${result}]`);
        }
    }

    console.log(allPassed ? '\n🎉 全部通过！' : '\n❌ 有测试未通过');
}

test();
