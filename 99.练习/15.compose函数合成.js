function add(x) {
  return function(y) {
    return x + y;
  };
}

function mul(x) {
  return function(y) {
    return x * y;
  };
}

function compose(...funcs) {
  return function(x) {
    return funcs.reduce((acc, func) => func(acc), x);
  };
}

const add10 = add(10);
const mul10 = mul(10);
const add100 = add(100);

const result = compose(add10, mul10, add100)(10);
console.log(result); // 输出 300