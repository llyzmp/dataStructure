/**
 * 手写一个链表结构，并完成一些链表的相关函数，要实现以下功能：
    1. 遍历打印
    2. 获取链表的长度
    3. 通过下标获取链表中的某个数据
    4. 通过下标设置链表中的某个数据
    5. 在链表某一个节点之后加入一个新节点
    6. 在链表末尾加入一个新节点
    7. 删除一个链表节点
    8. 链表倒序
 * 
 */


 /**
  * 
  *构造函数表示链表的一个节点
  * @param {*} value 节点数据
  */
  function Node(value){
    this.value = value;
    this.next = null; //下一个节点的地址
}


//  创建三个节点abc
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
// 使三个节点形成一个链表
a.next = b;
b.next = c;
// 检查是否正确
// console.log(a)

/**
*
*1.遍历打印链表数据
* @param {*} root 链表的根节点
*/
function print(root) {
   // while(root) {
   //     console.log(root.value)
   //     root = root.next
   // }
   // 如果下一个节点不存在,停止不在进行
   if(!root) return ;
   console.log(root.value);
   // 递归
   print(root.next)
}

/**
*2.获取链表长度
*
* @param {*} root 根节点
*/
function count(root) {
   // 如果根节点不存在,返回0
   if(!root) return 0;
   // 如果节点存在,最少长度为1,然后递归增加
   return 1+count(root.next);
}
// 检查链表长度
// console.log(count(a))

/**
*3.通过下标获取链表中的某个数据
*
* @param {*} root 链表根节点
* @param {*} index 想要获取到的数据索引
*/
function getValue(root,index){
   // 借助辅助函数来帮助解决 
   /**
    *
    *
    * @param {*} node表示某个节点
    * @param {*} i 表示第几个
    */
   function  _getValue(node,i){
       if(!node) return null;
       if(i == index) {
           return node.value;
           // 或者找到该节点
           // return node;
       }else {
           return _getValue(node.next,i+1)
       }
   }
   return _getValue(root,0) ;
}
// 传入参数根节点a,第二个参数是想要找到第几个数据
// console.log(getValue(a,5))


/**
*4.通过下标设置链表中的数据
*
* @param {*} root 根节点
* @param {*} index 想要修改数据的索引值
* @param {*} value 想要修改为的值
*/
function setValue(root,index,value) {
   /**
    *辅助函数
    *
    * @param {*} node传入的根节点
    * @param {*} i 
    */
   function _getValue(node,i){
       if(!node) return;
       if(i == index) {
           node.value = value;
           return;
       }
       return _getValue(node.next,i+1)
   }
   return _getValue(root,0)
}
// 进行测试修改节点内容
// setValue(a,1,'11111')

/**
*
*5.在链表某一个节点之后加入一个新节点  如在b和c之间加入一个节点e
* @param {*} node 根节点
* @param {*} newNode 新的节点
*/
function insertNode(node,newNode){
   // 创建一个新节点
   var newNode = new Node(newNode);
   // // 把新节点的地址指向c节点
   newNode.next = node.next;
   node.next = newNode;
}
//传入一个参数e,创建的新节点为e  在节点b后边添加e节点
// insertNode(b,'e')


/**
*
*6.在链表末尾加入一个新节点
* @param {*} root 链表根节点
* @param {*} newNode 新的节点
* @returns
*/
function push(root,newValue) {
   // // 链表不存在的情况
   if(!root) return;
   if(!root.next) {
       // 创建一个新节点
       var newNode = new Node(newValue);
       root.next = newNode;
   }
   else{
       push(root.next,newValue)
   }
}
// 调用函数,测试是否在链表最后末尾处添加一个节点m
// push(a,'m')

/**
*
*
* @param {*} root 链表的根节点
* @param {*} nodeValue 要删除节点
*/
function removeNode(root,nodeValue){
 //不能删除的情况 
 if(!root || !root.next) return;
 if(root.next.value === nodeValue) {
   root.next = root.next.next;
 }else{
   removeNode(root.next,nodeValue)
 }
}
// 比如说删除b节点
// removeNode(a,'b')

/**
*
*8.链表倒序
* @param {*} root 链表的根节点
*/
function reverse(root) {
   // 无法完成倒序的情况 
   if(!root || !root.next) return root;
   // 如果是两个节点的情况
   if(!root.next.next) {
       //保存一下root.next,倒序后,root.next就是根节点了
       var temp = root.next;
       root.next.next = root;
       root.next = null;
       return temp
   }
   else{
       //采用分治法 先把后续节点倒序,记录一下
       var temp = reverse(root.next);
       root.next.next = root;
       root.next = null;
       return temp
   }
}
console.log(reverse(a))

// 第一题,打印各个节点的值
// print(a)



