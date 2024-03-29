// 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：

// 在额外空间充足的情况下，尽量增大桶的数量
// 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中
// 同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。
// 1. 什么时候最快
// 当输入的数据可以均匀的分配到每一个桶中。

// 2. 什么时候最慢
// 当输入的数据被分配到了同一个桶中。

function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  var i;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i];                // 输入数据的最小值
    } else if (arr[i] > maxValue) {
        maxValue = arr[i];                // 输入数据的最大值
    }
  }

  //桶的初始化
  var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;   
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
      buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
      buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
      for (var j = 0; j < buckets[i].length; j++) {
          arr.push(buckets[i][j]);                      
      }
  }

  return arr;
}

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

let arr = [1,5,8,2,3,4,9,7,10,6];

const result = bucketSort(arr);
console.log(result)