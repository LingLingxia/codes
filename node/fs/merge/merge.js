const fs=require('fs');



function mergeFile(originFile,distFile){
    return new Promise((resolve,reject)=>{
        fs.readFile(originFile,(err,data)=>{
            if(err){
                reject(err);
            }
            
            fs.appendFile(distFile,data,(err)=>{
                if(err){
                    reject(err);
                }
                resolve();
            });
        })
    });

}



mergeFile('head.html','merge.html').then(()=>{
    mergeFile('footer.html','merge.html');
}).catch(err=>{
    throw err;
})


