/**
 * #27 移除元素（LeetCode）
 *
 * 题目：
 * 给你一个数组 nums 和一个值 val，你需要【原地】移除所有数值等于 val 的元素，
 * 并返回移除后数组的新长度。
 *
 * 要求：
 * - 不要使用额外的数组空间，必须仅使用 O(1) 额外空间并【原地】修改输入数组
 * - 元素的顺序可以改变，你不需要考虑数组中超出新长度后面的元素
 *
 * 示例 1：
 *   输入：nums = [3,2,2,3], val = 3
 *   输出：2, nums = [2,2,_,_]
 *
 * 示例 2：
 *   输入：nums = [0,1,2,2,3,0,4,2], val = 2
 *   输出：5, nums = [0,1,3,0,4,_,_,_]
 */

/**
 * 在下面写出你的实现
 */
var removeElement = function(nums, val) {
    // 你的代码
};

// ===== 测试代码（写完运行 node 04-remove-element.js 检查）=====
function test(nums, val, expectedLen) {
    const copy = [...nums];
    const len = removeElement(copy, val);
    const head = copy.slice(0, len);
    const pass = len === expectedLen && !head.includes(val);
    console.log(
        pass
            ? `✅ 通过：nums=${JSON.stringify(nums)} val=${val} → 长度 ${len}，前段 ${JSON.stringify(head)}`
            : `❌ 失败：nums=${JSON.stringify(nums)} val=${val} → 期望长度 ${expectedLen}，实际 ${len}，前段 ${JSON.stringify(head)}`
    );
}

test([3,2,2,3], 3, 2);
test([0,1,2,2,3,0,4,2], 2, 5);
test([1], 1, 0);
test([4,5], 1, 2);
