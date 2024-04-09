
function myInstanceOf(left, right) {
  if (typeof left !== 'object' || left === null) return false
  // 获取原型对象，Object.getPrototypeOf
  let proto = Object.getPrototypeOf(left)
  // 循环查找
  while(proto !== null) {
    if(proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

function Person(name) {
  this.name = name;
}

const person = new Person('John');

console.log(myInstanceOf(person, Person)); // 输出: true
console.log(myInstanceOf(person, Object)); // 输出: true
console.log(myInstanceOf(person, Array)); // 输出: false