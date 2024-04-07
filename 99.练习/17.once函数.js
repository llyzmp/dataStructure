function once(fn) {
  let flag = true
  let result 
  return function(...args) {
    if (flag) {
      result = fn.apply(this, args)
      flag = false
    } else {
      console.log('不能执行了');
    }
    return result
  }
}



function sayHello() {
  console.log("Hello!");
}

const sayHelloOnce = once(sayHello);

sayHelloOnce(); // 输出 "Hello!"
sayHelloOnce();