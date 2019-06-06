//Nim 游戏

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return !(n%4==0);
};


let arr = [1,2,3,4,5,6,7,8,9];
for(var i =0;i<arr.length;i++){
    console.log(arr[i],canWinNim(arr[i]));
}
