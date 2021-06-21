
// 创建一个node构造函数
function Node(value) {
  this.value = value;
  this.next = null;
}

// 节点
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 1.while循环遍历
function bianLink(root) {
  let temp = root;
  while(true) {
    if(temp !== null) {
      console.log('while遍历打印',temp.value);
    }else {
      break;
    }
    temp = temp.next;
  }
}

bianLink(node1);


// 递归遍历链表

function recursive(root) {
  if(root === null) return 
  console.log('递归遍历打印',root.value);
  recursive(root.next);
}

recursive(node1);