class Stack {
  constructor() {
    this.stack = []
  }
  push(ele) {
    this.stack.push(ele)
  }
  pop() {
    if (this.isEmpty()) {
      return new Error('该栈为空')
    } else {
      return this.stack.pop()
    }
  }
  peek() {
    if(!this.isEmpty()) {
      return this.stack[this.size() - 1]
    } else{
      return new Error('该栈为空')
    }
  }
  size() {
    return this.stack.length
  }
  isEmpty() {
    return this.size() === 0
  }
}

// 测试代码
const stack = new Stack();
console.log(stack.isEmpty()); // true
 
stack.push(5);
stack.push(3);
stack.push(8);
console.log(stack.peek()); // 8
console.log(stack.size()); // 3
 
stack.pop();
console.log(stack.peek()); // 3
console.log(stack.size()); // 2