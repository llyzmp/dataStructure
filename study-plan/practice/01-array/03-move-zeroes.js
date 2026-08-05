/**
 * =====================================================
 * #283 移动零
 * =====================================================
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/move-zeroes/
 *
 * 题目：
 * 给定一个数组 nums，将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 要求：必须在原数组上操作，不能拷贝额外的数组。
 *
 * 示例：
 * 输入：nums = [0,1,0,3,12]
 * 输出：nums = [1,3,12,0,0]
 *
 * 输入：nums = [0]
 * 输出：nums = [0]
 *
 * =====================================================
 * 方法讲解：快慢指针 + 交换
 * =====================================================
 *
 * 画面锚：扫地
 * 想象你在扫地，slow 标记"垃圾应该放到的位置"，
 * fast 遍历整个房间，遇到非零的就和 slow 交换。
 *
 * - slow：标记下一个非零元素应该放的位置
 * - fast：遍历整个数组
 *
 * 当 nums[fast] !== 0 时，交换 nums[slow] 和 nums[fast]，然后 slow++
 *
 * =====================================================
 * 你的任务：在下方写出你的代码
 * =====================================================
 */

var moveZeroes = function(nums) {
    // 在这里写你的代码
    // 提示：
    // 1. slow = 0
    // 2. fast 从 0 开始遍历
    // 3. 当 nums[fast] !== 0 时，交换 nums[slow] 和 nums[fast]，slow++
    // 4. 交换可以用解构赋值：[nums[slow], nums[fast]] = [nums[fast], nums[slow]]

};

// =====================================================
// 测试代码（不用修改）
// =====================================================

function test() {
    const testCases = [
        { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
        { input: [0], expected: [0] },
        { input: [1, 2, 3], expected: [1, 2, 3] },
        { input: [0, 0, 1], expected: [1, 0, 0] },
    ];

    let allPassed = true;

    for (const { input, expected } of testCases) {
        const nums = [...input];  // 复制一份
        moveZeroes(nums);

        if (JSON.stringify(nums) !== JSON.stringify(expected)) {
            console.log(`❌ 输入：[${input}]`);
            console.log(`   期望：[${expected}]，实际：[${nums}]`);
            allPassed = false;
        } else {
            console.log(`✅ 输入：[${input}] → [${nums}]`);
        }
    }

    console.log(allPassed ? '\n🎉 全部通过！' : '\n❌ 有测试未通过');
}

test();
