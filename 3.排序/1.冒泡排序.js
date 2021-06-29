let arr = [1,5,8,2,3,4,9,7,10,6];

// 排序不是比较大小
// 排序的本质是比较和交换

/**
 * 比较两个数值大小,并返回布尔值
 * @param {*} a 
 * @param {*} b 
 */
function compare(a,b) {
  if(a>b) return true
  return false
}

/**
 * 交换数组中两个值的位置
 * @param {*} arr 数组arr
 * @param {*} a 数组的下标a
 * @param {*} b 数组下标b
 */
function exchenge(arr,a,b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}


function sort(arr) {
  for(let i = 0; i < arr.length; i++ ){
    // 每一圈比较会找到一个最大的值放在最后,每次比较的圈数会多1
    for(let j = 0; j < arr.length - 1 - i; j++ ) {
      if(compare(arr[j],arr[j+1])){
        exchenge(arr,j,j+1)
      }
    }
  }
}

sort(arr);

console.log(arr);


