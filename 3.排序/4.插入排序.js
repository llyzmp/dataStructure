/**
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 *从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */

let arr = [1,5,8,2,3,4,9,7,10,6];


function insertSort(arr) {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let current = arr[i];
    let preIndex = i - 1
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex];
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

;
console.log(insertSort(arr))