const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

// 节点类
class Node {
  constructor(key) {
    // 节点值
    this.key = key;
    // 左侧子节点的引用
    this.left = null;
    // 右侧子节点的引用
    this.right = null;
  }
}

// 二叉搜索树是二叉树的一种，但是只允许左侧的存储比父节点小的值，在右侧节点存储的比父节点大的值
class BinarySearchTree {
  constructor(){
    this.root = null
  }
  // 插入
  insert(key) {
    if(this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    // 如果插入节点比根节点小，左侧添加
    if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = new Node(key)
    } else {
      // 左侧添加
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // 节点值比较
  compareFn(val1, val2) {
    if(val1 === val2) {
      return Compare.EQUALS
    }
    return val1 < val2 ? Compare.LESS_THAN : Compare.BIGGER_THAN
  }
  // 遍历
  
  // 删除
}


let tree = new BinarySearchTree()