/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0
  if(s.length === 1) return 1
  let arr = []
  let str = ''
  for(let i = 0; i < s.length;) {
      if(!str.includes(s[i])) {
          str += s[i]
          i++
      } else {
          arr.push(str)
          str = ''
          i = arr.length
      }
  }
  arr.push(str)
  arr.sort((a, b) => b.length - a.length)
  return arr[0] && arr[0].length
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("a"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));

