// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题
/**
 * 输入：["h","e","l","l","o"] 输出：["o","l","l","e","h"]
 * 输入：["H","a","n","n","a","h"] 输出：["h","a","n","n","a","H"]
 */
// 首尾替换法
function reverseStr(arr) {
  if(!Array.isArray(arr)) return
  let len = Math.floor(arr.length/2)
  for(let i = 0; i < len; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
  }
  return arr
}

console.log(reverseStr(["h","e","l","l","o"]));
console.log(reverseStr(["H","a","n","n","a","h"]));