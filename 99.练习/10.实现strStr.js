/**
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1
 * 给定 haystack = 'hello world', needle = 'll'  返回2
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的indexOf() 定义相符
 */


function strStr(haystack, needle) {
  if (needle === '') return 0
  let hlen = haystack.length
  let nlen = needle.length
  // needle长度大于haystack时，返回-1
  if(nlen > hlen) {
    return -1
  } else if (nlen === hlen) {
    return needle === haystack ? 0 : -1
  } else {
    // 遍历
    for(let i = 0; i <= hlen - nlen; i++) {
      let s = haystack.substr(i, nlen)
      if (s === needle) {
        return i
      }
    }
    return -1
  }
}

console.log(strStr('hello world', 'll'));
console.log(strStr('hello world', ''));
console.log(strStr('hello world', 'ddddddddd'));
console.log(strStr('hello world', 'hello world'));
console.log(strStr('hello world', 'zz'));
console.log(strStr('mississippi', 'issi'));
console.log(strStr('abc', 'c'));