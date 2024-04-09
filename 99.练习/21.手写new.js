function myNew(func) {
  if(Object.prototype.toString.call(func) !== '[object Function]') {
    throw new TypeError(`${func} is not a function`)
  }
  let obj = {}
  obj.__proto__ = Object.create(func.prototype)
  let result = func.apply(obj, Array.from(arguments).slice(1))
  return result instanceof Object ? result : obj
}

function Animal(name,color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.fn = function() {
  console.log('我是fn函数')
}
let an1 = myNew(Animal,'大黄','白色');

console.log(an1);
console.log(an1.fn());