/**
 * 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。分别对应的数值为：1 ，5，10，50，100，500，1000 。
 * 例如， 罗马数字 3 写做 III，即为三个并列的 1。12 写做 XII，即为 X+II。 26 写做 XXVII, 即为XX+V+I。
 */

const romanToIntOne = function (num) {
  const roman = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  const list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  // 先遍历特殊值
  for (const key in roman) {
    // 检测输入值是否含有特殊值
    if (num.includes(key)) {
      // 用正则去掉特殊值
      const reg = new RegExp(key);
      num = num.replace(reg, "");
      result += roman[key];
    }
  }
  for (const i of num) {
    // 累加正常罗马数
    result += list[i];
  }
  return result;
};
