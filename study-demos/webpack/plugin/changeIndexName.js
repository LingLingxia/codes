function changeIndexName(opt){
  console.log('*******************************');
}

changeIndexName.prototype.apply=(compiler)=>{
  console.log('******************^^^*************');
   compiler.plugin("a-plugin",(compilation,callback)=>{
    compilation.plugin("optimize",()=>{
      console.log("Assets are being optimized.");
    });
     callback();
   });
}

module.exports=changeIndexName;