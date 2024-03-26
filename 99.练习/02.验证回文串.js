/**
 * 输入: "A man, a plan, a canal: Panama" 输出: true
 * 输入: "race a car" 输出: false
 */

function isPalindrome(str) {
  if (typeof str !== 'string') return false
  // 删除字符
  let s = str.replace(/[^a-zA-Z0-9]/g, '')
  // 转换为小写,分隔成数组
  let arr = s.toLowerCase().split('')
  for (let i = 0; i < arr.length/2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('000'));