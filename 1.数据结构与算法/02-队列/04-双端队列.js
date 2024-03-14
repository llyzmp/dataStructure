/**
 * 双端队列，队头队尾都可以入队和出队
 */
class DoubleQueue {
  // 使用对象存储数据
  #item = {}
  // 记录存储数据的个数
  #count = 0
  // 记录队头的索引
  #lowCount = 0
  // 队头入队
  addFront(data) {
    // 为空时，从队尾添加一个数据
    if (this.isEmpty()) {
      this.addBack(data)
    } else {
      // 分两种情况，#lowCount>0, 如果队头被删后，#lowCount会+1，此时大于0，#item对象键为0的值为undefined
      if (this.#lowCount > 0) {
        this.#lowCount--
        this.#item[this.#lowCount] = data
      } else {
        // 从队头加需要所有数据后移
        for(let i = this.#count; i > 0; i--) {
          // 往后移一位， 假如count=2,两个数据，现在这两个往后移一位，队列头部为空，后边入队
          this.#item[i] = this.#item[i - 1]
        }
        // 队头入队
        this.#item[0] = data
        // 队列长度加一
        this.#count++
      }
    }
  }
  // 队头出队
  removeFront() {
    if(this.isEmpty()) return
    // 记录返回值
    const result = this.#item[this.#lowCount]
    // 删除队头
    delete this.#item[this.#lowCount]
    // 队头被删了，队头往后移一位，队头的索引加一
    this.#lowCount++
    return result
  }
  // 队尾入队
  addBack(data) {
    // 根据count索引
    this.#item[this.#count] = data
    this.#count++
  }
  // 队尾出队
  removeBack() {
    if (this.isEmpty()) return
    // 删除最后一个，count需要减1，先减在删
    this.#count--
    const result = this.#item[this.#count]
    delete this.#item[this.#count]
    return result
  }
  // 队列长度
  size() {
    return this.#count - this.#lowCount
  }
  // 是否为空
  isEmpty() {
    return this.size() === 0
  }
  // 清空队列
  clear() {
    this.#item = {}
    this.#lowCount = 0
    this.#count = 0
  }
  // 转换字符串
  toString() {
    let str = ''
    for(let i = this.#lowCount; i < this.#count; i++) {
      str += `${this.#item[i]} `
    }
    return str
  }
}

let q = new DoubleQueue()