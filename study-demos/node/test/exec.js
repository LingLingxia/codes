var str='fg[abcdefg[aabbc[a]]][ccddf[ab]]';

var reg=/\[(.+)\]/g;

var  matches=reg.exec(str);
while(matches){
    console.log(matches);
    matches=reg.exec(str);
}
