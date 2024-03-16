class MySet {
  constructor() {
    this.item = {}
  }
  add(data) {
    if(!this.has(data)) {
      this.item[data] = data
      return true
    }
    return false
  }
  delete(data) {
    if(this.has(data)) {
      delete this.item[data]
      return true
    }
    return false
  }
  // 是否已存在集合
  has(data) {
    return data in this.item
  }
  size() {
    return Object.keys(this.item).length
  }
  values() {
    return Object.values(this.item)
  }
  clear() {
    this.item = {}
  }
}

let mySet = new MySet()