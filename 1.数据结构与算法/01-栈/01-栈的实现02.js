class Stack {
  #data = []
  push(data) {
    this.#data.push(data)
  }
  pop() {
    return this.#data.pop()
  }
  peek() {
    return this.#data[this.#data.length - 1]
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
