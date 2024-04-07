function mySetInterval(cb, delay) {
  function interval() {
    cb()
    setTimeout(interval, delay)
  }
  setTimeout(interval, delay)
}

// 使用示例
let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
}

// 每隔1秒执行一次 incrementCounter
mySetInterval(incrementCounter, 1000);