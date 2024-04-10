
function curry(fn) {
  return function curried(...args) {
    // args参数长度小于或等于fn参数个数相同
    if(fn.length > args.length) {
      return function (...args2) { 
        // 合并参数
        return curried(...args.concat([...args2]))
      }
    }
    fn(...args)
  }
}






// 测试函数
function sum(a,b,c,d) {
  return a+b+c*d
}
let curried = curry(sum)
console.log(curried(1,2,3,4));
console.log(curried(1)(2)(3)(4));
console.log(curried(1,2)(3)(4));