class Stack {
  constructor() {
    this.count = 0
    this.data = []
  }
  push(item) {
    // 方法1： 数组的方法push
    // this.data.push(item)
    // 方法2： 利用数组的长度
    // this.data[this.data.length] = item
    // 方法3： 奇数
    this.data[this.count] = item
    this.count++
  }
  pop() {
    const temp = this.data[this.count - 1]
    delete this.data[--this.count]
    return temp
  }
  top() {

  }
  size() {

  }
  clear() {

  }
}
const stack = new Stack()