/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
 var minSessions = function(tasks, sessionTime) {
    let n = tasks.length;
    let cost = Array.from({length:(1<<n)}).fill(20);
    let dp = Array.from({length:(1<<n)}).fill(20);
    dp[0] = 0;
    for(let i = 0;i<(1<<n);i++){
        for(let j = 0;j<n;j++){
            if((1<<j)&i){
                //i 转换成二进制的时候，第j位是1，
                //表示状态为i 的结果集包含了第j位
               if(cost[i^(1<<j)] + tasks[j] <= sessionTime){
                   cost[i]= Math.min(cost[i],cost[i^(1<<j)] + tasks[j]);
                   dp[i] = Math.min(dp[i],dp[i^(1<<j)]);
                   //i^(1<<j) 表示在这一位把 tasks[j] 放进cost
               }else{
                   cost[i] = Math.min(cost[i],tasks[j]);
                   dp[i] = Math.min(dp[i],dp[i^(1<<j)] + 1);
               }
            }
        }
    }

    return dp[(1<<n) - 1]; 
};



var minSessions = function(tasks, sessionTime) {
    const ans =tasks.length ;
    const cost = Array.from({length:tasks.length}).fill(0);
    tasks.sort((a,b)=>b-a);
    dp(0,0);
    function dp(index,cnt){
          if(cnt>ans) return ;
           if(index===tasks.length){
               ans = cnt;
               return ;
           }
           for(var i = 0;i<cnt;i++){
               if(times[i] + tasks[index]<=sessionTime){
                  times[i]+=tasks[index];
                  dp(index+1,cnt);
                  times[i]-=tasks[index];
               }
           }
           times[cnt] = tasks[index];
           dp(index+1,cnt+1);
           times[cnt] = 0;
    }

    return ans;

}