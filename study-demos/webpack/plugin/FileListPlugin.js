const fs = require('fs');
function FileListPlugin(options){}
FileListPlugin.prototype.apply = function(compiler){
  compiler.hooks.run.tap('FileLIstPlugin',function(compilation){
   //fs.readFileSync('plugin.js',json());
    debugger;

  });
  compiler.hooks.emit.tap('FileLIstPlugin',function(compilation){
    debugger;
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
    // compiler.plugin('emit',function(compilation,callback){
    //     //DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead

    //     var filelist = 'In this build:\n\n';
    //     for(var filename in compilation.assets){
    //         filelist +=('-' + filename + '\n');
    //     }
    //     compilation.assets['filelist.md'] = {
    //         source:function(){
    //             return filelist;
    //         },
    //         size:function(){
    //             return filelist.length;
    //         }
    //     }
    //     callback();
    // });
};

module.exports = FileListPlugin;