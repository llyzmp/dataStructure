// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

// 重复第二步，直到所有元素均排序完毕。
let arr = [1,5,8,2,3,4,9,7,10,6];



function selectSort(arr) {
  if (!arr || !Array.isArray(arr)) return
  let len = arr.length, temp
  for(let i = 0; i < len; i++) {
    let minIndex = i;
    for(let j = i+1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}

selectSort(arr)
console.log(arr)