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