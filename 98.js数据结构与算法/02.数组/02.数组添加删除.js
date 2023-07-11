let numbers = [0,1,2,3,4,5,6,7,8,9];

// 添加一个元素
numbers[numbers.length] = 10
// 使用push方法添加
numbers.push(11)
numbers.push(12)


// 在数组前边插入一条数据
for (let i = numbers.length; i >= 0; i--) {
  numbers[i] = numbers[i - 1]
}
numbers[0] = -1

// 使用数组方法unshift
numbers.unshift(-2)
numbers.unshift(-4, -3)

// 删除数组最后的元素，使用pop方法
// numbers.pop()

// 移除数组中第一个元素, 但是最后一位元素为undefined
// for(let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i + 1]
// }

// 删除第一个元素用shift元素
numbers.shift()

// 在任意位置添加或删除，使用splice
// 从索引为5删除3个元素， 把2，3，4删除
numbers.splice(5,3)

// 把数字2，3，4插入到数组
// splice接收第一个参数，想要删除或插入的索引值，第二个参数是删除元素的个数，第三个参数往后就是要添加到数组的值
numbers.splice(5, 0, 2,3,4)



console.log(numbers)