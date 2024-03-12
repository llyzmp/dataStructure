// 斐波那契数列
// F(0) = 1，F(2) = 1,F(n) = F(n − 1) + F(n − 2)（n ≥ 2,n ∈ N ∗ ）

// let fibonacci = []
// fibonacci[1] = 1
// fibonacci[2] = 1

// for(let i = 3; i < 20; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }
// for (let i = 0; i < fibonacci.length; i++) {
//   console.log(fibonacci[i])
// }

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));