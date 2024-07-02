/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 * 
 * 因为有26个字母，相当于 26 进制转 10 进制
 * 1. 26 进制 转化 10 进制公式，ans = ans * 26 + num
 * 2. 比如：AB = 1 * 26 + 2 = 28，ZY= 26 * 26 + 25 = 701
 * 
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  const ls = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  if (columnTitle.length === 1) return ls.indexOf(columnTitle) + 1
  let ans = 0
  for(let i = 0; i < columnTitle.length; i++) {
    const inx = ls.indexOf(columnTitle[i]) + 1
    ans = ans + inx * Math.pow(26, columnTitle.length - i - 1)
  }
  return ans
  
};
// @lc code=end



console.log(titleToNumber('A'))
console.log(titleToNumber('AB'))
console.log(titleToNumber('ZY'))
console.log(titleToNumber('ZAA'))
console.log(titleToNumber('CBA'))