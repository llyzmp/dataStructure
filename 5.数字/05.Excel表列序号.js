/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 * 
 * 从末尾开始取得每一个字符对应的数 cur = c.charCodeAt() - 64（ 因为 A 的charCode为 65） 因为
 * 有 26 个字母，所以相当于 26 进制，每 26 个数则向前进一位 数字总和 sum += 当前数 进制位数
 * 进制位数 = 26，初始化进制位数 carry = 1
 * 
 * 1. 创建临时变量 sum 和始化进制位数 carry
 * 2. 循环数组
 * 3. 数字总和 sum += 当前数 * 进制位数
 * 4. 进制位数 *= 26
 * 
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  
  let sum = 0
  let carry = 1
  for(let i = columnTitle.length - 1; i >= 0; i--) {
    let cur = columnTitle.charCodeAt(i) - 64
    sum += cur * carry
    carry *= 26
  }
  return sum
};
// @lc code=end

console.log(titleToNumber('A'))
console.log(titleToNumber('AB'))
console.log(titleToNumber('ZY'))
console.log(titleToNumber('ZAA'))
console.log(titleToNumber('CBA'))