// HashMap 类，它是 Dictionary 类的一种散列表 实现方式。.散列算法的作用是尽可能快地在数据结构中找到一个值。

class PairValue {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}
// hash 散列表
class HashTable {
  constructor() {
    this.table = {}
  }
  // 把键转换为字符串存储
  toStrFn(data) {
    if(data === null) {
      return 'NULL'
    } else if(data === undefined) {
      return 'UNDEFINED'
    } else if(typeof data === 'string' || data instanceof String) {
      return `${data}`
    }
    return JSON.stringify(data)
  }
  // 网上网友研究出来的
  myHashCode(key) {
    let str = 5381
    if (typeof key === 'number') {
      return key
    }
    let k = this.toStrFn(key)
    for(let i = 0; i < k.length; i++) {
      str = (str * 33) + k.charCodeAt(i)
    }
    return str % 1013
  }
  hashCode(key) {
    return this.myHashCode(key)
  }
  put(key, value) {
    if (key != null && value != null) {
      key = this.hashCode(key)
      this.table[key] = new PairValue(key, value)
      return true
    }
    return false
  }
  get(key) {
    if (key !== null) {
      let p = this.hashCode(key)
      return this.table[p].value
    }
    return false
  }
  remove(key) {
    const hash = this.hashCode(key)
    if(this.table[hash] != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
}

let hash = new HashTable()