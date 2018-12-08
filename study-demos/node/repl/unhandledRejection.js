process.on('unhandledRejection',(reason,p) => {

    console.log('uncatched error ', p, ' reason :', reason);

});

const pro=new Promise((resolve,reject) => {
  setTimeout(function() {
      resolve(500);
    }, 1000);
    
});
pro.then((data) =>{
    
    //没有catch这个错误 
    return JSON.pare('ddd:0');
    console.log(data);
});