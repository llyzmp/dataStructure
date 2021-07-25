let str = 'aaabbbbccdddddrrrrrr';

/**
 * 最长连续字符串个数
 * 利用滑动窗口,双指针解法
 * @param {string} str 
 * @returns {Number}
 */

function maxlong(str) {
  // 定义两个变量代表两个指针(索引)
  // 定义一个最大值
  let i = 0,j=0,max=1;
  // 
  for(; i < str.length; j++) {
    // 如果第i位和第j位相等,说名该字符最大数还在增加,继续,如果不相等就做以下操作
    if(str[i] !== str[j]) {
      // 记录当前字符的最长值
      let temp = j - i;
      // 当前字符最长值和最大值比较
      if(max < temp) {
        max = temp;
      }
      // 此时i的位置更换到j的位置,为下一个字符做记录
      i = j
    }
  }
  // 返回最大值
  return max
}

console.log(maxlong(str));