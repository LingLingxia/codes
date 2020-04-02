/**
 * 
 * 很暴力
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
  if(text.length===1) return 1;
  var currentChar = text[0],start=0,end=1,map={},maxLen = 1;
  for(var i = 1;i<text.length;i++){
      if(text[i]!=currentChar){
          map[currentChar] = map[currentChar] || [];
          map[currentChar].push({start,end})
          maxLen = Math.max(maxLen,end-start);
          start = i;
          end = start +1;
          currentChar = text[i];
      }else{
         end ++

      }
  }
  map[currentChar] = map[currentChar] || [];
  map[currentChar].push({start,end})
  maxLen = Math.max(maxLen,end-start);
  for(var char in map){
      let arr = map[char];
      if(arr.length>1){
           maxLen = Math.max(maxLen,arr[0].end-arr[0].start+1);
          for(var i =1;i<arr.length;i++){
         
              if(arr[i].start-arr[i-1].end===1){
                   if(arr.length===2){
         
                      maxLen =  Math.max(maxLen,arr[i].end-arr[i-1].start-1)
                   }else{
                       maxLen =  Math.max(maxLen,arr[i].end-arr[i-1].start)
                   }
              }else{
                      maxLen = Math.max(maxLen,arr[i].end-arr[i].start+1);
              }
          }
      }
  }
  return maxLen;
};
/**
 * 动态规划,解答错误
 */




  
