let arr = [1,5,8,2,3,4,9,7,10,6];

// 排序不是比较大小
// 排序的本质是比较和交换
function bubbleSort(arr) {
  if (!arr || !Array.isArray(arr)) return
  let len = arr.length
  while (len--) {
    for(let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
}

bubbleSort(arr)

console.log(arr)