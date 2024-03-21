/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 输入: s = "anagram", t = "nagaram"  输出: true
 * 输入: s = "rat", t = "car" 输出: false
 * 思路： 首先，对字符串字母进行排序，然后，比较两字符串是否相等。
 * @param {*} s 
 * @param {*} t 
 */
function fn(s, t) {
  if (!isStr(s) || !isStr(t)) {
    return false
  }
  const sortFn = (a,b)=>{
    return a.charCodeAt() - b.charCodeAt()
  }
  const arr1 = s.split('')
  const arr2 = t.split('')
  arr1.sort(sortFn)
  arr2.sort(sortFn)
  return arr1.join('') === arr2.join('')
}

function isStr(str) {
  return Object.prototype.toString.call(str) === '[object String]'
}

console.log(fn('anagram', 'nagaram'));
console.log(fn('rat', 'car'));