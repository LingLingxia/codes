//最长的不重复子串的长度 
var lengthOfLongestSubstring = function(s) {
  if(s ==='') return 0;
  let maxCount = 1 ;
  let count = 1;
  let countObj = {};
  let start = 0,end = 1;
  countObj[s[start]] =  start;
  while(start<end&&end<s.length){
    console.log('before',start,end,countObj);
      if(typeof countObj[s[end]] === 'number'){
        newStart = countObj[s[end]] + 1;
        count = end - start + 1;
        countObj[s[start]]= start;
      }else{
         count++;
         maxCount = Math.max(maxCount,count);
         countObj[s[end]] = end;
         end++;
      }
     console.log('after',start,end,maxCount);
  }
  return maxCount;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));//3
// console.log(lengthOfLongestSubstring('bbbbb'));//1
// console.log(lengthOfLongestSubstring('pwwkew'));//3
console.log(lengthOfLongestSubstring('dvdf'));//3

