const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }
a.next = b
b.next = c
c.next = d



// 插入 
const e = { val: 'e' }
c.next = e
e.next = d

// 遍历列表
let point = a
while(point) {
  console.log(point.val);
  point = point.next;
}

// 删除
c.next = d
