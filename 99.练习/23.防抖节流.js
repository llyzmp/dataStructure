function debounce(fn,delay) {
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,args)
    },delay)
  }
}


function test(a, b, c) {
  console.log(a+b+c);
}

const t = debounce(test, 5000)
t(1,2,3)

function throttle(fn, delay) {
  let flag = true
  return function(...args) {
    if(flag) {
      flag = false
      setTimeout(() => {
        fn.apply(this, args)
        flag = true
      }, delay);
    }
  }
}

const p = throttle(test, 3000)
p(2,3,4)