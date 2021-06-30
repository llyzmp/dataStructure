let arr = [1, 5, 8, 2, 3, 4, 9, 7, 10, 6];

// 比较,返回布尔值
function compare(a, b) {
  if (a > b) return true
  return false
}

// 交换位置
function exchange(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp
}

// 排序, 选择排序
function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var maxIndex = 0; // 定义一个索引
    // 内层循环,每次循环少比较一个,比较一圈,找到最大的放在最后
    for (var j = 0; j < arr.length - i; j++) {
      // 拿着最大的跟每一个对比
      if (compare(arr[maxIndex], arr[j])) {
        // 交换索引,找到最大的或最小的索引
        maxIndex = j;
      }
    }
    // 然后交换位置,每一圈交换就向前移动一位,因为最大的已经在后边了
    exchange(arr, maxIndex, arr.length - 1 - i)
  }
}

sort(arr);
console.log(arr);


// 任何一种排序算法,都没有优劣之分,只有是否适合的场景