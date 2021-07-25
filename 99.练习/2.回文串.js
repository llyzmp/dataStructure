


/**
 * 验证回文串,不包含符号,忽略大小写和空格
 * 利用双指针,左指针和右指针
 * @param {*} str 
 * @returns 
 */
// 要验证排除字符和空格
function isValide(char){
  return (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
}
// 要转换大小写

function Palindrome(str) {
  if(str.length === 0) return true
  // 定义一个左指针和右指针
  var left = 0,right = str.length - 1;
  // 如果left交叉相遇,则证明前边顺利进行,返回true
  while(left < right) {
    var leftChar = str[left].toLowerCase();
    var rightChar = str[right].toLowerCase();
    // 如果不符合规则看下一位,向右移动一位
    if(!isValide(leftChar)){
      left++;
    }
    // 如果不符合,看下一位,向左移动一位
    else if(!isValide(rightChar)) {
      right--;
    }
    // 如果两者不相等,直接false
    else if(leftChar !== rightChar) {
      return false
    }
    // 以上都符合,两边都移动,都看下一位做对比
    else {
      left++;
      right--;
    }
  }
 
  //  循环走完了,证明都符合,直接true
  return true

}





console.log(Palindrome('A man, a plan, a canal: Panama')); // true
console.log(Palindrome('race a car')); // false
console.log(Palindrome(''));   // true
console.log(Palindrome(' ')); // true
console.log(Palindrome('ab')); // false
console.log(Palindrome('ab,cd a . .a dc,ba')); // true
console.log(Palindrome('12312')); // false
console.log(Palindrome('12333 21')); // true










