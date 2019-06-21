// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// //找规律 
// var grayCode = function(n) {
//     let arr =[];
//     let powN = 1<<n;
//     for(var i = 0;i<powN;i++){
//         arr.push(i^(i>>1));
//     }

//     return arr;
// };


//动态规划

var grayCode = function(n) {
    if(n===0) return 0;
    let init = [0,1];
    for(var i = 2;i<=n;i++){
        let tmp = [];
        for(var j = 0;j<init.length;j++){
            tmp.unshift(init[j] + (1<<(i-1)));
        }
        init.push(...tmp);
    }
    return init;
};

grayCode(3);