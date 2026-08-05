# 链表反转 — 三指针法

## 记忆锚
**画面锚：寻宝接力** — 每张纸片知道下一张在哪，但没有地图，只能一张一张往下找

## 核心思想
反转链表就是把每个节点的 `next` 指针从"指向下一个"改成"指向上一个"

## 关键代码（三指针法）

```javascript
var reverseList = function(head) {
    let prev = null        // 初始: prev = null
    let current = head     // 初始: current = head
    
    while (current) {      // 遍历到 current = null 为止
        const next = current.next  // ① 存住 next
        current.next = prev        // ② 反转指针
        prev = current             // ③ prev 前进
        current = next             // ④ current 前进
    }
    
    return prev            // 返回新头节点
}
```

## 口诀
**存 → 转 → 移 → 移**

## 复杂度
- 时间复杂度：O(n) — 遍历一次链表
- 空间复杂度：O(1) — 只用了三个指针

## 易错点
1. **初始值**：`prev = null`, `current = head`
2. **循环条件**：`while (current)` 而不是 `while (current.next)`
3. **返回值**：`return prev`（新头节点）

## 链表 vs 数组对比

| 场景 | 链表 | 数组 | 谁赢 |
|------|------|------|------|
| 已定位 + 删末尾 | O(1) | O(1) | 平手 |
| 已定位 + 删中间 | O(1) | O(n) | 链表赢 |
| 需查找 + 删中间 | O(n) | O(n) | 平手 |
| 随机访问 | O(n) | O(1) | 数组赢 |

## 前端场景
- React Fiber 的 child/sibling 指针链表
- LRU 缓存（已有节点引用，频繁增删中间元素）
- 浏览器历史记录（前进/后退）

## 必刷题
- [x] #206 反转链表 — 三指针法
- [ ] #21 合并两个有序链表 — 双指针 + 哑节点
- [ ] #141 环形链表 — 快慢指针

## 学习日期
- 首次学习：2026-07-30
- R1 回忆测试：2026-07-31
- R2 闭卷默写：2026-08-02
- R3 换题练习：2026-08-06
- R4 费曼讲解：2026-08-13
- R5 终极检验：2026-08-29
