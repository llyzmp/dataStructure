// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
/**
 * s = "leetcode" 返回 0.
 * s = "loveleetcode" 返回 2.
 * 从头到尾遍历一遍，判断每个位置的字符的indexOf和lastIndexOf是否相等
 */

function firstUniqStr(str) {
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i
    }
  }
  return -1
}

console.log(firstUniqStr('leetcode'));
console.log(firstUniqStr('loveleetcode'));