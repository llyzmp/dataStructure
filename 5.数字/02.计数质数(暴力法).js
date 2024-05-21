/**
 * 统计所有小于非负整数 n 的质数的数量。
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * @param {*} n 
 */
// 思路
// 首先回顾质数的定义，质数是指在大于 1 的自然数中，除了 1 和它本身以外不再有其他因数的自然
// 数。所以，我们可以根据定义直接从 2 开始直到 n 根据定义判断每一个数字是否为质数。
function isPrime(n) {
  if (typeof n !== 'number') return 0
  if (n <= 2) return 0
  let count = 0
  let nums = []
  for(let i = 2; i < n; i++) {
    let count2 = 0
    for(let j = 2; j <= i; j++) {
      if (i % j === 0) {
        count2++
      }
      if (j === i && count2 === 1) {
        count++
        nums.push(i)
      }
    }
  }
  return count
}


console.log(isPrime(10));
