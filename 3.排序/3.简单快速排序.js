// 简单快速排序,  选择数组中第一个数,小的站左边,大的站右边

let arr = [2,3,4,1,9,5,7,10,6];

function quickSort(arr) {
  if(arr === null || !arr.length) return []
  // 选择第一个数,比这个数小的push在一个数组,比他大的在push另一个数组
  let leader = arr[0];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < leader) {
      left.push(arr[i]);
    }else {
      right.push(arr[i])
    }
  }
  left = quickSort(left);
  right = quickSort(right);

  left.push(leader);

  return left.concat(right);
}

console.log(quickSort(arr));