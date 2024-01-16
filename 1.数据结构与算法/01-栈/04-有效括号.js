/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 */

// 越靠后的左括号，对应的右括号越靠前
// 新建一个栈，扫描字符串，遇到左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法
// 最后栈空了就合法，否则不合法

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
      const c = s[i]
      if (c === '(' || c === '{' || c === '[') {
          stack.push(c)
      } else {
          const t = stack[stack.length - 1]
          if (
              (t === '(' && c === ')') ||
              (t === '{' && c === '}') ||
              (t === '[' && c === ']')
          ){
              stack.pop()
          } else {
              return false
          }
      }
  }
  return stack.length === 0
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
