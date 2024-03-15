// 封装节点类
class Node {
  constructor(element) {
    // 节点元素
    this.element = element
    // 下一节点指向
    this.next = null
  }
}

// 单链表封装
class LinkedList {
  constructor(){
    // 记录链表节点的个数
    this.count = 0
    // 记录链表头
    this.head = null
  }
  // 链表尾部添加节点
  push(element) {
    // 创建新节点
    const node = new Node(element)
    // 保存head
    let current = this.head
    // 链表为空时
    if(this.count === 0) {
      this.head = node
    } else {
      // 查找到最后一个节点赋值给current
      while(current.next) {
        current = current.next
      }
      // 最后一个节点添加新节点
      current.next = node
    }
    // 链表长度加1
    this.count++
  }
  // 通过索引添加节点
  addNodeByIndex(element, index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      const node = new Node(element)
      if (index === 0) {
        node.next = current
        this.head = node
      } else {
        let pre = this.findEleByIndex(index - 1)
        current = pre.next
        pre.next = node
        node.next = current
      }
      this.count++
      return true
    } 
    return false
  }
  // 通过索引查找节点
  findEleByIndex(index) {
    if(index >= 0 && index < this.count) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }
  // 通过元素查找节点
  findEle(element) {
    let current = this.head
    while(current.element !== element) {
      current = current.next
    }
    return current
  }
  // 通过元素查找索引
  findIndexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      // 可以使用其他库，高级方法对比，此处省略，因为存储的内容可能是复杂类型
      if(current.element === element) {
        return i
      } else {
        current = current.next
      }
    }
    // 没找到返回-1
    return -1
  }
  // 通过索引移除节点
  removeByIndex(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      }else {
        const pre = this.findEleByIndex(index - 1)
        current = pre.next
        pre.next = current.next
      }
      this.count--
      return current.element
    }
    return
  }
  // 通过元素移除节点
  removeByEle(element) {
    // 根据当前元素查找当前索引
    const index = this.findIndexOf(element)
    return this.removeByIndex(index)
  }
  getHead() {
    return this.head
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
}

let link = new LinkedList()