 const fs=require('fs');
 //const reg=/>((\.| |[a-zA-Z]|\n|:)+?)</g;

 const reg=/>(([0-9a-zA-Z\. \:\n,\?\!\(\)'])+?)</g;
 const spec="=>";
 var templateKey;
 var template1='><?= $_LANG[\'lang\'][\'';
 var template2='\']?><';


 var lang="";
 var valueArr={};
 fs.readFile('lang-test.php','utf8',(err,str)=>{
     var newStr=str;
     if(err) throw err;
     var matches=reg.exec(str);
     var i=0;
     var key,value;
     var replace=true;
     var addKey=true;
     while(matches){
         replace=true;
         addKey=true;
         if(Number.isNaN(Number(matches[1]))){//找到一个
            matches[1]=matches[1].trim();
            var tempKey=matches[1].split(' ');
            var len=tempKey.length;
                tempKey.length=len>=3?3:len;
            key=tempKey.join('-');
            value=matches[1];
            if(valueArr[key]){//已经有过这个key 并且值也相等，直接替换，否则不处理
                if(valueArr[key]!=matches[1]){
                    if(!valueArr[key+'-2']){//如果这个不存在，改变key其他正常操作
                        key=key+'-2';
                    }else {
                        if(valueArr[key+'-2']!=matches[1]){
                            replace=false;
                        }
                    }

                }else{
                    addKey=false;
                }

            }
            if(addKey){
                valueArr[key]=value;
                lang+=`'${key}'${spec}'${value}',\n`;
            }
            
            if(replace){
                newStr= newStr.replace(matches[0],template1+key+template2);
            }
            i++;

        }
        matches=reg.exec(str);

     }
     fs.writeFile('code.php',newStr,(err)=>{
        if(err) throw err;
     });
     fs.writeFile('lang.php',lang,(err)=>{
        if(err) throw err;
     });
 })