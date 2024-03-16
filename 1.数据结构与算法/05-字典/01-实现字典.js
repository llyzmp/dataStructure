// 字典和集合很相似，集合以[值，值]的形式存储元素，字典则是以[键，值]的形式来存储元素。字典也称作映射、符号表或关联数组

// 存储键值
class PairValue {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}
// 字典类
class Dictionary{
  constructor() {
    this.item = {}
  }
  // 把键转换为字符串存储
  toStrFn(data) {
    if(data === null) {
      return 'NULL'
    } else if(data === undefined) {
      return 'UNDEFINED'
    } else if(typeof data === 'string' && data instanceof String) {
      return `${data}`
    }
    return JSON.stringify(data)
  }
  hasKey(key) {
    return this.item[this.toStrFn(key)] != null
  }
  set(key, value) {
    if (!this.hasKey(key)) {
      this.item[this.toStrFn(key)] = new PairValue(this.toStrFn(key), value)
      return true
    }
    return false
  }
  get(key) {
    if (this.hasKey(key)) {
      return this.item[this.toStrFn(key)]
    }
    return undefined
  }
  remove(key) {
    if(this.hasKey(key)) {
      delete this.item[this.toStrFn(key)]
      return true
    }
    return false
  }
  keys() {
    if(!this.isEmpty()) {
      return this.keyValues().map(ele => ele.key)
    }
    return undefined
  }
  values() {
    if(!this.isEmpty()) {
      return this.keyValues().map(ele => ele.value)
    }
    return undefined
  }
  keyValues() {
    if (!this.isEmpty()) {
      return Object.values(this.item)
    }
    return undefined
  }
  size() {
    return Object.keys(this.item).length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.item = {}
  }
  forEach(cb) {
    let keyValues = this.keyValues()
    for (let i = 0; i < keyValues.length; i++) {
      cb(keyValues[i].key, keyValues[i].value, i)
    }
  }
}

let dict = new Dictionary()