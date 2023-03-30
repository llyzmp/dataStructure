// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
function dailyTemperatures (T) {
  // 创建单调栈用于记录(存储索引值， 用于记录天数)
  const stack = [0]
  let count = 1

  // 创建结果数组（默认讲结果数组使用0填充）
  const len = T.length
  const arr = new Array(len).fill(0)

  // 遍历T
  for(let i = 0; i < len; i++) {
    let temp = T[i]

    // 使用temp比较栈顶值，如果栈顶值小，出栈（计算日期差，并存储），并重复操作
    // stack[count - 1] 代表栈顶值
    while(count && temp > T[stack[count - 1]]) {
      let index = stack.pop()
      count--
      // 计算index与i的差， 作为index位置的升温日期的天数使用
      arr[index] = i - index
    }
    stack.push(i)
    count++
  }
  return arr
}