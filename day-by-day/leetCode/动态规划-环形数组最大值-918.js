
function  maxSubarraySumCircular (A){
    const N = A.length;
    const ans = A[0],cur = A[0];

    for(let i = 1;i<N;i++){
        cur = A[i] + Math.max(cur,0);
        ans = Math.max(ans.cur);
    }//不环的最大值

    const rightsums = Array.from({length:N});
    rightsums[N-1] = A[N-1];
    for(let i = N-2;i>=0;--i){
        rightsums[i] = rightsums[i+1] + A[i];
    }

    const maxright = Array.from({length:N});
    maxright[N-1] = A[N-1];
    for(let i = N-2;i>=0;i--){
        maxright[i] = Math.max(maxright[i+1],maxright[i]);
    }

    let leftsum = 0;
    for(let i = 0;i<N-2;i++){
        leftsum +=A[i];
        ans = Math.max(ans,leftsum + maxrightp[i+2]);
    }
  return ans;
}