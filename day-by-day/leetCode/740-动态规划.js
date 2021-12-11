/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
     //这道题告诉我，学会思维的转换是多么的重要，虽然题干告诉我是要删除连续的数字，并且还说了i+1,i-1，但是实际上，这是干扰条件，
     //要学会自己转换思维才可以做出来
    let obj = {},sum = 0;
    nums.forEach(key=>{
         if(obj[key]){
             obj[key] +=key;
         }else{
             obj[key] = key;
              
         }
    })
   let nums2 =Array.from(new Set(nums)).sort((a,b)=>a-b);
   let ans = Array.from({length:nums2.length}).fill(0);
   ans[0] = obj[nums2[0]];
   ans[1] = (nums2[0] + 1 === nums2[1]) ?Math.max(obj[nums2[0]],obj[nums2[1]]):
   (obj[nums2[0]] + obj[nums2[1]]);
   if(nums2.length<2)  return ans[nums2.length-1];
    for(var i = 2;i<nums2.length;i++){  
        if(nums2[i] ===nums2[i-1] +1 ){
            ans[i] =  Math.max(ans[i-2] + obj[nums2[i]] ,ans[i-1] );          
        }else {
            ans[i] = ans[i-1] + obj[nums2[i]];
        }
          
    }   
    return ans[ans.length-1];

};