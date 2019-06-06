//5. 最长回文子串

//小伙子不要想太多了,暴力解法有时候才实用
var longestPalindrome = function(s){
  if(!s||s.length===1) return s;
   let maxLen = 1;
   let retStr = s[0];
   let len = s.length;
   for(var i =0;i<len;i++){
      var j = 1;
      while(i-j+1>=0&&i+j<len&&s[i-j+1]===s[i+j]){//偶数
            j++;
      }
      j--;
      if(j*2>maxLen){
        maxLen = j*2;
        retStr = s.slice(i-j+1,i+j+1);
      }
      j = 1;
      while(i-j>=0&&i+j<len&&s[i-j]===s[i+j]){//奇数
        j++;
      }
      j--
      if(j*2+1>maxLen){
        maxLen = j*2+1;
        retStr = s.slice(i-j,i+j+1);
      }
     // console.log(i,maxLen,retStr);
   }

   return retStr;
}



/**
 * @param {string} s
 * @return {string}
 */
//超时 
// var longestPalindrome2 = function(s) {
//     if(s==='') return '';
//     if(s.length===1) return s;
//     let len = s.length;
//     let dp = [];
//     let read = [];
//     let start = 0,end = 0,max = 1;
//     for(var i =0;i<len;i++){
//        dp[i] = Array.from({length:len});
//        dp[i].fill(1);
//        read[i] = Array.from({length:len});
//        read[i].fill(false);
//     }
//     function getLongest(i,j){
//       if(i > j) return ;
//       if(i==j) {
//         dp[i][j] =1;
//         read[i][j] = true;
//         return ;
//       }
//       if(i+1 === j){
//         if(s[i] === s[j]){
//           dp[i][j] = 2;
//           if(dp[i][j]>max){
//             max = dp[i][j];
//             start = i;
//             end = j;
//           }
//         }else{
//            dp[i][j] = 1;
//         }
//         read[i][j] = true;
//         return ;
//       }
//       if(read[i][j]) return ;
      
//       getLongest(i+1,j);
//       getLongest(i,j-1);
//       let tmp = 0;
//       if(s[i] === s[j]&&dp[i+1][j-1] == (j-i-1)){
//         tmp = dp[i+1][j-1] + 2;
//       }
      
//       dp[i][j] = Math.max(tmp,dp[i+1][j],dp[i][j-1]);
//      if(tmp>max){
//        start = i;
//        end = j;
//        max = tmp;
//      }
//      read[i][j] = true;
//     }

//     getLongest(0,len-1);
//     return s.slice(start,end+1);
// };

// var longestPalindrome = function(s){
//   if(s==='') return '';
//   if(s.length===1) return s;
//   let len = s.length;
//   let dp = [];
//   let start = 0,end = 0,max = 1;
//   for(var i =0;i<len;i++){
//      dp[i] = Array.from({length:len});
//     // dp[i].fill(0);
//   }
//   function getLongest(i,j){
//     if(i > j) return ;
//     if(i==j) {
//       dp[i][j] =1;
//       return ;
//     }
//     if(i+1 === j){
//       if(s[i] === s[j]){
//         dp[i][j] = 2;
//         if(dp[i][j]>max){
//           max = dp[i][j];
//           start = i;
//           end = j;
//         }
//       }else{
//          dp[i][j] = 1;
//       }
//       return ;
//     }
//     if(dp[i][j]) return ;
//     getLongest(i+1,j);
//     getLongest(i,j-1);
//     let tmp = 0;
//      if(s[i] === s[j]){
//        //可能出现此时 i+1 j-1未赋值的情况
//         dp[i+1][j-1]  = dp[i+1][j-1] || 1;
//         if(dp[i+1][j-1] === (j-i-1) ){
//           tmp = dp[i+1][j-1] + 2;
//         }
//         if(tmp>max){
//           start = i;
//           end = j;
//           max = tmp;
//       }
//     }
      
//     dp[i][j] = Math.max(tmp,dp[i+1][j],dp[i][j-1]);

//   }

//   getLongest(0,len-1);
//   return s.slice(start,end+1);
// }


// longestPalindrome();

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bdadd'));
console.log(longestPalindrome('aba'))
// console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'));
//console.log(longestPalindrome("rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip"));


