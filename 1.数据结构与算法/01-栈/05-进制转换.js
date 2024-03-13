class Stack {
  #data = []
  push(data) {
    this.#data.push(data)
  }
  pop() {
    return this.#data.pop()
  }
  peek() {
    // return this.#data[this.#data.length - 1]
    return this.#data.at(-1)
  }
  size() {
    return this.#data.length
  }
  clear() {
    this.#data = []
  }
  isEmpty() {
    return this.#data.length === 0
  }
}
// 进制转换
function convert(decNumber, num = 2) {
  let stack = new Stack()
  let number = decNumber
  let str = ''
  const baseString = '0123456789ABCDEF'
  if (typeof number !== 'number') return
  while(number > 0) {
    stack.push(number % num)
    number = Math.floor(number / num)
  }
  while(!stack.isEmpty()) {
    str += baseString[stack.pop()]
  }
  return str
}

console.log(convert(500, 16));