/**
 * 统计所有小于非负整数 n 的质数的数量。
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * @param {*} n
 */

const countPrimes = function (n) {
  let count = 0;
  const arr = new Uint8Array(n);
  for (let i = 2; i < n; i++) {
    if (!arr[i - 1]) {
      count++;
      for (let j = i * i; j <= n; j += i) {
        arr[j - 1] = true;
      }
    }
  }
  return count;
};
