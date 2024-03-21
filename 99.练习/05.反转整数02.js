// 1 示例 1:
// 2 输入: 123
// 3 输出: 321
// 4
// 5 示例 2:
// 6 输入: -123
// 7 输出: -321
// 8
// 9 示例 3:
// 10 输入: 120
// 11 输出: 21

// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个
// 假设，如果反转后整数溢出那么就返回 0。

// -Math.pow(2, 31)
// Math.pow(2, 31) - 1

function reverse(num) {
  if (Object.prototype.toString.call(num) !== '[object Number]') {
    throw new Error(`${num}不是number类型`)
  }
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  if(num < min || num > max) {
    throw new Error(`${num}不在${min}-${max}范围内`)
  }
  let n = 0
  let temNum = Math.abs(num)
  while(temNum !== 0) {
    n = temNum % 10 + n * 10
    temNum = Math.floor(temNum / 10)
  }
  if(num < 0) {
    n = -n 
  }
  return n
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
// console.log(reverse(2147483648));
