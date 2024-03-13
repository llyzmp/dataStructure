class Queue {
  // 使用对象，优化上个队列，提高性能
  #item = {}
  // 记录
  #count = 0
  // 记录队头的索引
  #lowCount = 0
  // 入队
  enqueue(data) {
    this.#item[this.#count] = data
    this.#count++
  }
  // 出队
  dequeue() {
    if(this.isEmpty()) return
    // 记录返回值
    const result = this.#item[this.#lowCount]
    delete this.#item[this.#lowCount]
    this.#lowCount++
    return result
  }
  // 队头
  front() {
    return this.#item[this.#lowCount]
  }
  // 队列长度
  size() {
    return this.#count - this.#lowCount
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.#item = {}
    this.#lowCount = 0
    this.#count = 0
  }
  toString() {
    let str = ''
    for(let i = this.#lowCount; i < this.#count; i++) {
      str += `${this.#item[i]} `
    }
    return str
  }
}