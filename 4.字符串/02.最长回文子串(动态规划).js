/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 */

/**
 * 思想
 * 动态规划是希望把问题划分成相关联的子问题，从最基本的子问题出发推导较大的子问题，直到所有子问题都解决
 * 根据字符串的长度简历一个矩阵dp,通过不同情况的判断条件，通过dp[i][j]标识s[i]至s[j]所代表的子串是否是回文串
 *
 * 过程
 * 1、建立矩阵dp
 * 2、循环遍历字符串、取得不同长度的子串
 * 3、不同长度的子串、根据不同条件进行判断是否为回文子串
 *  a、长度为1，一定是回文
 *  b、长度为2或3，判断首尾是否相同，s[i] === s[j]
 *  c、长度 > 3，首尾字符相同，且去掉首尾之后的子串仍为回文，（s[i]===s[j]&&dp[i+1][j-1]）
 * 4、取得长度最长的回文子串
 */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const dp = []
  for (let i = 0; i < s.length; i += 1) {
    dp[i] = []
  }
  let max = -1
  let str = ""
  for (let l = 0; l < s.length; l += 1) {
    // l为所遍历的子串长度 - 1，即左下标到右下标的长度
    for (let i = 0; i + l < s.length; i += 1) {
      const j = i + l
      // i为子串开始的左下标，j为子串开始的右下标
      if (l === 0) {
        // 当子串长度为1时，必定是回文子串
        dp[i][j] = true
      } else if (l <= 2) {
        // 长度为2或3时，首尾字符相同则是回文子串
        if (s[i] === s[j]) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }
      } else {
        // 长度大于3时，若首尾字符相同且去掉首尾之后的子串仍为回文，则为回文子串
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }
      }
      if (dp[i][j] && l > max) {
        max = l
        str = s.substring(i, j + 1)
      }
    }
  }
  return str
};

console.log(longestPalindrome("babad"));
