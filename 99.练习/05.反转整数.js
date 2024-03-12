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

function fn(num) {
  let result
  if (typeof num !== 'number') return
  const n = Math.pow(2, 31)
  if (num > (n - 1) || num < -n){
    return 0
  }
  const tempNum = String(num).split('')
  if(tempNum.includes('-')){
    result = -tempNum.slice(1).reverse().join('')
  } else {
    result = Math.abs(tempNum.reverse().join(''))
  }
  return result
}


console.log(fn(123));
console.log(fn(-123));
console.log(fn(120));
console.log(fn(2147483648));


/**
2 * @param {number} x
3 * @return {number}
4 */
const reverse = (x) => {
  // 非空判断
  if (typeof x !== 'number') {
    return;
  }
   // 极值
  const MAX = 2147483647;
  const MIN = -2147483648;
  
   // 识别数字剩余部分并翻转
  const rest =
  x > 0
  ? String(x)
  .split('')
  .reverse()
  .join('')
  : String(x)
  .slice(1)
  .split('')
  .reverse()
  .join('');
  
   // 转换为正常值，区分正负数
  const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);
  
   // 边界情况
  if (result >= MIN && result <= MAX) {
  return result;
  }
  return 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(2147483648));