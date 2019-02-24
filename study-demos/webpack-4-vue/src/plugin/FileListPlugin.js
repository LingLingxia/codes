const fs = require('fs');
class FileListPlugin{
    apply(compiler){
        compiler.hooks.emit.tap('FileLIstPlugin',(compilation)=>{
            var filelist = 'In this build:\n\n';
            for(var filename in compilation.assets){
                filelist +=('-' + filename + '\n');
            }
            compilation.assets['filelist.md'] = {
                source:function(){
                    return filelist;
                },
                size:function(){
                    return filelist.length;
                }
            }
        })
    }
}

module.exports = FileListPlugin;
