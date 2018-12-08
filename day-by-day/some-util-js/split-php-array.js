const fs=require('fs');
const util=require('util');

function  replaceToJs(data){
    var str=data.replace(/\[/g,"{");

    str=str.replace(/\]/g,"}");
    str=str.replace(/=>/g,":");
    return str;
}


function replaceToPhp(data){
    var str=data.replace(/\{/g,"[\n");
    str=str.replace(/\}/g,"\n]");
    str=str.replace(/:/g,"=>");
    return str; 
}

fs.readFile('product.php','utf8',(err,data)=>{
   var str=replaceToJs(data);
   var product=eval ('('+str+')');

   var attr=['id','version','standard','length'];

   var another={};
   for(var i in product){
       
      for( var s of attr){
          if(product[i][s]){

            if(typeof another[i]=='object'){
                another[i][s]=product[i][s];
            }else{
                another[i]={};
                another[i][s]=product[i][s];
            }
          }

      }
   }

var strAnother='',strProduct='';

    strAnother= replaceToPhp(JSON.stringify(another,null,'  '));
    strProduct=JSON.stringify(product,function(k,v){
        if(attr.indexOf(k)<0){
            return v;
        }
    },'     ');


    strProduct=replaceToPhp(strProduct);
    strAnother=replaceToPhp(strAnother);
   fs.writeFile('another.php','<?php \n'+strAnother,(err)=>{
    if(!err){
        console.log('another success!');
    }
});
   fs.writeFile('product1.php','<?php \n'+strProduct,(err)=>{
        if(!err){
            console.log('success!');
        }
   });
   
});
