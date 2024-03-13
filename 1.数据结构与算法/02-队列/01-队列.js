class Queue {
  #data = []
  enqueue(data) {
    this.#data.push(data)
  }
  dequeue() {
    return this.#data.shift()
  }
  front() {
    return this.#data[0]
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