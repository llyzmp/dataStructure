/**
 * 5个人围成圈，有个人在外边敲鼓，敲一下把花传给下个人，假如敲8下，最后看看谁获胜
 */
// 假如从小明开始，敲一下传给小红，然后小明追加到队尾，以此类推，直到一轮结束，花在谁手中，谁下去，直到最后剩下一个人，这个人获胜

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


function game(list, num) {
  let queue = new Queue()
  // 全员入队
  for(let i = 0; i < list.length; i++) {
    queue.enqueue(list[i])
  }
  // 循环直到最后剩下一个人
  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      // 循环时，把对头追加到队尾
      queue.enqueue(queue.dequeue())
    }
    // 循环一圈之后，队头那个人拿着花，他就出局了
    console.log('出局了', queue.dequeue());
  }
  // 循环结束，队里只剩一个人，出队，获胜者
  return queue.dequeue()
}

const list = ['小明', '小红', '韩信', '后裔', '孙策', '狄仁杰']
game(list, 8)