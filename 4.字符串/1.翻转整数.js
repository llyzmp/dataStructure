/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 输入: 123
 * 输出: 321
 * 
 * 示例 2:
 * 输入: -123
 * 输出: -321
 * 
 * 示例 3:
 * 输入: 120
 * 输出: 21
 * 
 */

// 示例

function fn(x) {
  if (typeof x !== 'number') return
  if (x === 0) return 0
  let result = ''
  const MAX = 2147483647
  const MIN = -2147483648
  let strNumArr = x.toString().split('').reverse()
  if (x < 0) {
    const index = strNumArr.findIndex(ele => ele === '-')
    strNumArr.splice(index, 1)
    strNumArr = ['-', ...strNumArr]
  }
  strNumArr.forEach(ele => {
    result += ele
  })
  result = Number(result)
  if(result > MAX || result < MIN) return 0
  console.log(result)
  return result
}

fn(123)
fn(-123)
fn(120)