// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
/**
 * s = "leetcode" 返回 0.
 * s = "loveleetcode" 返回 2.
 */

function firstUniqStr(str) {
  let result = []
  for(let i = 0; i < str.length; i++) {
    const f = result.find(v => v && v.value === str[i])
    if (f) {
      f.count++
    } else {
      result[i] = {
        value: str[i],
        count: 1,
        index: i
      }
    }
  }
  const target = result && result.find(v => v && v.count === 1)
  if(target) {
    return target.index
  } else {
    return -1
  }
}

console.log(firstUniqStr('leetcode'));
console.log(firstUniqStr('loveleetcode'));