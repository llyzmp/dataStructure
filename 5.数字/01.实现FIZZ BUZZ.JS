/**
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是 3 的倍数，输出“Fizz”；
 * 2. 如果 n 是 5 的倍数，输出“Buzz”；
 * 3. 如果 n 同时是 3 和 5 的倍数，输出 “FizzBuzz”。
 */

function fizz(n) {
  if(Object.prototype.toString.call(n) !== '[object Number]') {
      throw new Error(`${n} is not a number`)
    }
    let result = []
    for(let i = 1; i <= n; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz')
      } else if(i % 3 === 0) {
        result.push('Fizz')
      } else if (i % 5 === 0) {
        result.push('Buzz')
      } else {
        result.push(i.toString())
      }
    }
    return result
  };

console.log(fizz(20));