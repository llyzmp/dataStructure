let arr = [1, 5, 8, 2, 3, 4, 9, 7, 10, 6];

// 在一个区间内找到最小或最大值,放在最前边或者最后边
// 整个区间中,1和其他进行比较,比较9次  ,把最小的放在第一位
// 从5开始比较后边数字进行比较,比较8次,  把最小的放在第二位
// ....

// 交换位置
function exchange(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp
}

function selectSort(arr) {
  // 从第0位开始,比较9次,就是i<arr.length-1
  for(let i = 0; i < arr.length - 1; i++) {
    // 搞定i-arr.length-1区间
    // 从该区间中找到最小值,和第i位交换
    let min = arr[i]; // 定义一个变量
    let index = i; // 最小值所在的位置
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    // 最小值已经找出
    // 交换第i位和第index位
    exchange(arr, i, index)
  }
}

selectSort(arr);

console.log(arr);