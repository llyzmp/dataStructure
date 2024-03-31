/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 输入: ["flower","flow","flight"] 输出: "fl"
 * 1. 获取数组中第一个字符串，保存在一个变量temp中
 * 2. 遍历数组，temp与其他字符串比较，遍历整个数组，就能得到最长公共前缀
 */
function longestCommonPrefix(arr) {
  if(arr.length === 0) return ''
  if(arr.length === 1) return arr[0]
  let temp = arr[0]
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < temp.length; j++) {
      if(temp[j] !== arr[i][j]) {
        temp = temp.slice(0, j)
        break
      }
    }
  }
  return temp ? temp : ''
}


console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));