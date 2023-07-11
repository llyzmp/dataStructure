// 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue+1),
      sortedIndex = 0;
      arrLen = arr.length,
      bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i++) {
      if (!bucket[arr[i]]) {
          bucket[arr[i]] = 0;
      }
      bucket[arr[i]]++;
  }

  for (var j = 0; j < bucketLen; j++) {
      while(bucket[j] > 0) {
          arr[sortedIndex++] = j;
          bucket[j]--;
      }
  }

  return arr;
}


let arr = [1,5,8,2,3,4,9,7,10,6];

const result = countingSort(arr, 10);
console.log(result)