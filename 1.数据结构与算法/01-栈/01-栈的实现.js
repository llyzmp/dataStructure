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
    if (this.isEmpty()) {
      console.log('栈为空')
      return
    }
    const temp = this.data[this.count - 1]
    delete this.data[--this.count]
    return temp
  }
  top() {
    if (this.isEmpty()) {
      console.log('栈为空')
      return
    }
    return this.data[this.count-1]
  }
  size() {
    return this.count
  }
  clear() {
    this.data = []
    this.count = 0
  }
  isEmpty() {
    return this.count === 0
  }
}
const stack = new Stack()