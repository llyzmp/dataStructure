/**
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1
 * 给定 haystack = 'hello world', needle = 'll'  返回2
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的indexOf() 定义相符
 */

const strStr = function (haystack, needle) {
  const hayLen = haystack.length;
  const nedLen = needle.length;

  if (!needle) {
    return 0;
  }
  if (nedLen > hayLen) {
    return -1;
  } else if (nedLen === hayLen) {
    return haystack === needle ? 0 : -1;
  } else {
    for (let hasIndex = 0; hasIndex <= hayLen - nedLen; hasIndex++) {
      if (
        haystack[hasIndex] === needle[0] &&
        haystack[hasIndex + nedLen - 1] === needle[nedLen - 1]
      ) {
        if (nedLen === 1) {
          return hasIndex;
        }
        for (let nedIndex = 1; nedIndex < nedLen; nedIndex++) {
          if (haystack[hasIndex + nedIndex] !== needle[nedIndex]) {
            break;
          }
          if (nedIndex === nedLen - 1) {
            return hasIndex;
          }
        }
      }
    }
  }
  return -1;
};

console.log(strStr("hello world", "ll"));
console.log(strStr("hello world", ""));
console.log(strStr("hello world", "ddddddddd"));
console.log(strStr("hello world", "hello world"));
console.log(strStr("hello world", "zz"));
console.log(strStr("mississippi", "issi"));
console.log(strStr("abc", "c"));
