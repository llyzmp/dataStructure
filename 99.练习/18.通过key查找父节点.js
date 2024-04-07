
function findParentNodeByChildKey(key, nodes) {
  for(let node of nodes) {
    if (node.key === key) {
      return node
    }
    if (node.children) {
      let result = node.children.some(v => v.key === key)
      if (result) {
        return node
      }
      let parentNode = findParentNodeByChildKey(key, node.children)
      if (parentNode) {
        return parentNode
      }
    }
  }
  return null
}



let nodes = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: []
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: []
      },
      {
        title: '0-0-2',
        key: '0-0-2'
      },
    ]
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-1', isLeaf: true },
      { title: '0-1-0-1', key: '0-1-0-2', isLeaf: true },
      { title: '0-1-0-2', key: '0-1-0-3', isLeaf: true },
    ]
  },
  {
    title: '0-2',
    key: '0-2'
  }
]

let res = findParentNodeByChildKey('0-2', nodes)
console.log(res);