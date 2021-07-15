function Node(value) {
  this.value = value;
  this.next = null;
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// /**
//  * 遍历打印
//  * @param {*} node 
//  * @returns 
//  */
// function print(node) {
//   if(!node) return 
//   console.log(node.value);
//   print(node.next);
// }
// print(node2);

// /**
//  * 获取链表长度
//  * @param {*} node 
//  * @returns 
//  */
// function getLength(node) {
//   if(!node) return 0
//   return 1 + getLength(node.next);
// }
// console.log(getLength(node1));

// /**
//  * 通过下标获取指定节点的值
//  * @param {*} root 根节点
//  * @param {*} i  某一个
//  * @returns 
//  */
// function getNode(root,i) {
  
//   function _getNode(node,index) {
//     if(!node) return null
//     if(i === index) {
//       return node.value;
//     }else {
//       _getNode(node.next,index+1);
//     }
//   }

//   return _getNode(root,0)
// }

// console.log(getNode(node1,3));

// /**
//  * 通过下标设置链表中的某个数据
//  * @param {*} root 
//  * @param {*} i 
//  * @param {*} val 
//  * @returns 
//  */
// function setValue(root, i, val) {
//   function _setValue(node, index) {
//     if(!node) return
//     if(index === i) {
//       node.value = val;
//     }else {
//       _setValue(node.next, index + 1)
//     }
//   }
//   return _setValue(root, 0)
// }

// setValue(node1,3,9)
// console.log(node4);



// /**
//  * 某个节点后添加新节点
//  * @param {*} node 
//  * @param {*} newVal 
//  */
// function addNode(node,newVal){
//   let newNode = new Node(newVal);

//   newNode.next = node.next;
//   node.next = newNode;
// }



// addNode(node2,77);

// console.log(node1);



// /**
//  * 链表末尾添加节点
//  * @param {*} root 
//  * @returns 
//  */
// function addEndNode(root) {
//   if(!root) return 
//   let Node99 = new Node(99);
//   if(!root.next) {
//     root.next = Node99;
//     Node99.next = null;
//   }else {
//     addEndNode(root.next);
//   }
// }

// addEndNode(node4);
// console.log(node4);


// /**
//  * 删除节点
//  * @param {*} root 
//  * @param {*} nodeVal 
//  * @returns 
//  */
// function delNode(root,nodeVal) {
//   if(!root || !root.next) return

//   if(root.next.value === nodeVal) {
//     root.next = root.next.next;
//   }else {
//     delNode(root.next,nodeVal);
//   }
// }

// delNode(node1,2);
// console.log(node1);


