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
/**
 * 遍历
 * 中序遍历：是按照顺序访问BST所有节点的遍历方式，也就是从小到大的顺序访问所有节点，中序遍历对树进行排序
 * 先序遍历：优先于后代节点的顺序访问每个节点，先序遍历的应用是打印一个结构化文档
 * 后续遍历：先访问节点的后代节点，在访问节点本身，后续遍历的一种应用是计算一个目录及子目录所有文件占用的空间大小
 * 删除：
 * 最复杂
 */
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
      if(node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
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
  //  中序遍历
  inOrderMap(cb) {
    this.inOrderMapNode(this.root, cb)
  }
  inOrderMapNode(node, cb) {
    if (node !== null) {
      this.inOrderMapNode(node.left, cb)
      cb(node.key)
      this.inOrderMapNode(node.right, cb)
    }
  }
  // 前序遍历
  preOrderMap(cb) {
    this.preOrderMapNode(this.root, cb)
  }
  preOrderMapNode(node, cb) {
    if(node !== null) {
      cb(node.key)
      this.preOrderMapNode(node.left, cb)
      this.preOrderMapNode(node.right, cb)
    }
  }
  // 后序遍历
  postOrderMap(cb) {
    this.postOrderMapNode(this.root, cb)
  } 
  postOrderMapNode(node, cb) {
    if(node !== null) {
      this.postOrderMapNode(node.left, cb)
      this.postOrderMapNode(node.right, cb)
      cb(node.key)
    }
  }
  // 最小节点
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    while(current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }
  // 最大节点
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while(current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }
  // 删除
}


let tree = new BinarySearchTree()
tree.insert(100)
tree.insert(90)
tree.insert(110)
tree.insert(80)
tree.insert(130)

tree.inOrderMap((val) => {
  console.log(val);
})
tree.preOrderMap((val) => {
  console.log(val);
})
tree.postOrderMap((val) => {
  console.log(val);
})