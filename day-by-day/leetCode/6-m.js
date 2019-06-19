//Z 字形变换

//一个很不好的解法,虽然可以通过
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let len = s.length;
  let ret = [];
  let groups = Math.floor(len/numRows);
  let remainder = len%numRows;
  let n = 0;
  let groupNumber = 2*groups - 2;
  let lastNumbers = Array.from({length:numRows});
  lastNumbers[0]= remainder>m?1:0;
  for(var m = 1;m<numRows;m++){
        lastNumbers[m] = remainder>m? lastNumbers[m] +1:lastNumbers[m];
        if(m!=numRows-1&&remainder>=2*numRows - m  - 1 ){
          lastNumbers[m] ++;
        }
  }
  
  for(var j = 0;j<groups.length;j++){//遍历组，遍历行
    ret[j] = s[j*groupNumber];
    for(var k =1;k<numRows-1;k++){
       
    }
  }
};

//优秀啊,现在不知道我能不能想到
var convert = function(s, numRows) {
  // 通过一个数组来存储numRows个字符串
  let arr = [];
  // 记录当前下标
  let count = 0;
  // 当前应该是下标递增或是递减
  let add = true;
  // 如果numRows为1，直接返回字符串s
  if (numRows === 1) {
      return s;
  }
  // 遍历给定字符串
  for (let i = 0; i < s.length; i++) {
      // 需要判断arr[count]是否存在，防止出现undefined + 'a'这类情况
      arr[count] = arr[count] ? arr[count] + s[i] : s[i];
      // 当count计数到0时，接下来需要递增
      // 当count计数到numRows - 1时，接下来需要递减
      if (count === 0) {
          add = true;
      } else if (count === numRows - 1) {
          add = false;
      }
      // 根据递增递减情况，对下标count进行对应操作
      count = add ? count + 1 : count - 1;
  }
  
  // 拼接多个元素并返回结果
  return arr.join('');
};



var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let count = 0,add = true,arr = [];
    for(var i = 0;i<s.length;i++){
         arr[count] = arr[count]?arr[count] + s[i]:s[i];
         if(count === numRows - 1){
           add = false;
         }
         if(count === 0){
           add = true;
         }

         count +=add?1:-1;
    }
    return arr.join('');
};