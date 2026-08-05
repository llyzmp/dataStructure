/**
 * 数组 — 手写实现
 * 画面锚：电影院连排座位（挨着排，编号直接定位）
 */

// ==================== 动态数组模拟 ====================

class DynamicArray {
  constructor(capacity = 4) {
    this.data = new Array(capacity);
    this.size = 0;
    this.capacity = capacity;
  }

  // 获取元素 O(1)
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    return this.data[index];
  }

  // 设置元素 O(1)
  set(index, val) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    this.data[index] = val;
  }

  // 扩容（翻倍策略）
  _resize(newCapacity) {
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];  // 搬运元素
    }
    this.data = newData;
    this.capacity = newCapacity;
    console.log(`  扩容到 ${newCapacity}，搬运了 ${this.size} 个元素`);
  }

  // 尾部插入 O(1) 均摊
  push(val) {
    if (this.size === this.capacity) {
      this._resize(this.capacity * 2);  // 翻倍扩容
    }
    this.data[this.size] = val;
    this.size++;
  }

  // 尾部删除 O(1)
  pop() {
    if (this.size === 0) {
      throw new Error('Array is empty');
    }
    this.size--;
    return this.data[this.size];
  }

  // 头部插入 O(n)
  unshift(val) {
    if (this.size === this.capacity) {
      this._resize(this.capacity * 2);
    }
    // 所有元素往后移一位
    for (let i = this.size; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.size++;
  }

  // 头部删除 O(n)
  shift() {
    if (this.size === 0) {
      throw new Error('Array is empty');
    }
    const val = this.data[0];
    // 所有元素往前移一位
    for (let i = 0; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    return val;
  }

  // 中间插入 O(n)
  insert(index, val) {
    if (index < 0 || index > this.size) {
      throw new Error('Index out of bounds');
    }
    if (this.size === this.capacity) {
      this._resize(this.capacity * 2);
    }
    // index 后面的元素全部后移
    for (let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = val;
    this.size++;
  }

  // 中间删除 O(n)
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    const val = this.data[index];
    // index 后面的元素全部前移
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    return val;
  }

  // 转数组
  toArray() {
    return this.data.slice(0, this.size);
  }

  // 打印
  print() {
    console.log(`[${this.toArray().join(', ')}] (size=${this.size}, capacity=${this.capacity})`);
  }
}

// ==================== 常用数组算法 ====================

/**
 * 两数之和 — 哈希表
 * 复杂度：O(n) 时间，O(n) 空间
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

/**
 * 移除元素 — 双指针
 * 复杂度：O(n) 时间，O(1) 空间
 */
function removeElement(nums, val) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;  // 新数组长度
}

/**
 * 删除有序数组中的重复项 — 双指针
 * 复杂度：O(n) 时间，O(1) 空间
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;  // 新数组长度
}

/**
 * 移动零 — 双指针
 * 复杂度：O(n) 时间，O(1) 空间
 */
function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
}

/**
 * 合并两个有序数组 — 从后往前
 * 复杂度：O(m + n) 时间，O(1) 空间
 */
function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // 拼接剩余
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}

/**
 * 最大子数组和 — Kadane 算法
 * 复杂度：O(n) 时间，O(1) 空间
 */
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// ==================== 测试代码 ====================

// 测试动态数组
console.log('=== 动态数组 ===');
const arr = new DynamicArray(2);
console.log('初始：');
arr.print();

arr.push(1);
arr.push(2);
console.log('push 1, 2：');
arr.print();

arr.push(3);  // 触发扩容
console.log('push 3（触发扩容）：');
arr.print();

arr.unshift(0);
console.log('unshift 0：');
arr.print();

console.log('pop：', arr.pop());
arr.print();

// 测试两数之和
console.log('\n=== 两数之和 ===');
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]

// 测试移除元素
console.log('\n=== 移除元素 ===');
const nums1 = [3, 2, 2, 3];
console.log('新长度：', removeElement(nums1, 3));  // 2

// 测试删除重复项
console.log('\n=== 删除重复项 ===');
const nums2 = [1, 1, 2];
console.log('新长度：', removeDuplicates(nums2));  // 2

// 测试移动零
console.log('\n=== 移动零 ===');
const nums3 = [0, 1, 0, 3, 12];
moveZeroes(nums3);
console.log(nums3);  // [1, 3, 12, 0, 0]

// 测试合并有序数组
console.log('\n=== 合并有序数组 ===');
const nums4 = [1, 2, 3, 0, 0, 0];
merge(nums4, 3, [2, 5, 6], 3);
console.log(nums4);  // [1, 2, 2, 3, 5, 6]

// 测试最大子数组和
console.log('\n=== 最大子数组和 ===');
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6
