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

   for(var i in product){

       if(product[i]['version']){
           for(var v in product[i]['version']){
               product[i]['version'][v]['image-store']=`/wp-content/assets/2018/08/store/${i}-${v}.png`;
           }
       }else{
            product[i]['image-store']=`/wp-content/assets/2018/08/store/${i}.png`;
       }
   }

var strAnother='';

    strAnother= replaceToPhp(JSON.stringify(product,null,'  '));

   fs.writeFile('another.php','<?php \n'+strAnother,(err)=>{
    if(!err){
        console.log('another success!');
    }
});

   
});
