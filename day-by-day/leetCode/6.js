//Z 字形变换


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