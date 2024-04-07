// 实现一个无限累加的函数 sum(1)(2)(3)(4)(5)(6).valueOf()

function sum(x) {
  let total = x
  function addNext(y) {
    total += y
    return addNext
  }
  addNext.valueOf = function() {
    return total
  }
  return addNext
}

const res = sum(1)(2)(3)(4)(5)(6).valueOf()
console.log(res);