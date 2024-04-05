let jack = {
  name : "jack.ma",
  age:40,
  like:{
      dog:{
          color:'black',
          age:3,
      },
      cat:{
          color:'white',
          age:2,
          d: this.jack
      }
  }
}
function copy(data){
  if(!data || typeof data !== 'object') return data
  let dest = Array.isArray(data) ? [] : {}
  for(let key in data) {
    if(data.hasOwnProperty(key)) {
      dest[key] = copy(data[key])
    }
  }
 //在这里实现
  return dest
}
let jack2 = copy(jack)

//比如修改jack2中的内容，不会影响到jack中的值
jack2.like.dog.color = 'green'
jack2.name = '11'
console.log(jack)
console.log(jack2)