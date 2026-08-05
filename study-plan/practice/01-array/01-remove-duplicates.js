/**
 * =====================================================
 * #26 删除有序数组中的重复项
 * =====================================================
 * 难度：Easy
 * 链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 *
 * 题目：
 * 给定一个**升序排列**的数组 nums，原地删除重复出现的元素，
 * 返回删除后数组的新长度。
 * 要求：不能使用额外的数组空间，必须在原地修改。
 *
 * 示例：
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2]
 *
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 *
 * =====================================================
 * 方法讲解：快慢指针
 * =====================================================
 *
 * 画面锚：排队筛查
 * 想象一排人按身高排序站着，你要把重复身高的人请走。
 *
 * - slow：标记「不重复区域」的末尾
 * - fast：遍历整个数组，寻找下一个不重复的数
 *
 * 关键逻辑：
 * 当 nums[fast] !== nums[slow] 时，说明找到了一个新的数，
 * 把它放到 slow + 1 的位置。
 *
 * 因为数组是升序的，重复的数一定相邻，
 * 所以只需要比较 nums[fast] 和 nums[slow] 就够了。
 *
 * =====================================================
 * 你的任务：在下方写出你的代码
 * =====================================================
 */

var removeDuplicates = function(nums) {
    // 在这里写你的代码
    // 提示：
    // 1. slow 从 0 开始
    // 2. fast 从 1 开始遍历
    // 3. 当 nums[fast] !== nums[slow] 时，slow++，然后 nums[slow] = nums[fast]
    // 4. 最后返回 slow + 1

};

// =====================================================
// 测试代码（不用修改）
// =====================================================

function test() {
    const testCases = [
        { input: [1, 1, 2], expected: 2, expectedNums: [1, 2] },
        { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5, expectedNums: [0, 1, 2, 3, 4] },
        { input: [1], expected: 1, expectedNums: [1] },
        { input: [], expected: 0, expectedNums: [] },
    ];

    let allPassed = true;

    for (const { input, expected, expectedNums } of testCases) {
        const nums = [...input];  // 复制一份，避免修改原数组
        const result = removeDuplicates(nums);

        if (result !== expected) {
            console.log(`❌ 输入：[${input}]`);
            console.log(`   期望长度：${expected}，实际长度：${result}`);
            allPassed = false;
        } else {
            // 检查 nums 的前 expected 个元素是否正确
            const actualNums = nums.slice(0, result);
            if (JSON.stringify(actualNums) !== JSON.stringify(expectedNums)) {
                console.log(`❌ 输入：[${input}]`);
                console.log(`   期望数组：[${expectedNums}]，实际数组：[${actualNums}]`);
                allPassed = false;
            } else {
                console.log(`✅ 输入：[${input}] → 长度=${result}, nums=[${actualNums}]`);
            }
        }
    }

    console.log(allPassed ? '\n🎉 全部通过！' : '\n❌ 有测试未通过');
}

test();
