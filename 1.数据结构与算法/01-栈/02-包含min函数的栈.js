class MinStack {
  constructor() {
    // 存储栈中元素
    this.stackA = [];
    this.countA = 0;
    // 记录栈中最小值
    this.stackB = []
    this.countB = 0;
  }
  push(item) {
    this.stackA[this.countA++] = item;
    // push第一个值的时候记录最小值，不是第一次时和之前栈顶元素对比
    if (this.countB === 0 || item <= this.min()) {
      this.stackB[this.countB++] = item;
    }
  }
  pop() {
    if (this.min() === this.top()) {
      delete this.stackB[--this.countB]
    }
    delete this.stackA[--this.countA]

  }
  min() {
    return this.stackB[this.countB - 1]
  }
  top() {
    return this.stackA[this.countA - 1]
  }
}

const m = new MinStack()
