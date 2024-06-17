
/**
 * 3的幂
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * @param {*} n 
 */
function isPowerOfThree(n) {
  // 特殊情况，3的0次幂是1
  if(n === 1) return true
  if(n < 1 || n % 3 !== 0) return false
  return isPowerOfThree(n / 3)
}

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(45))