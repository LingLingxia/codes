// function changeIndexName(opt){
//   console.log('*******************************',opt);
// }

// changeIndexName.prototype.apply=function(compiler){
//   console.log('******************^^^*************');
//   compiler.hooks.compile.tap('changeIndexName',function(){
//     console.log('****************compiling************************8');
//   });
//   //  compiler.plugin("compile",function(compilation){
//   //   // compilation.plugin("optimize",function(){
//   //   //   console.log("Assets are being optimized.");
//   //   // });
//   //   // callback();
//   //  });
//  compiler.hooks.emit.tap('changeIndexName',function(compilation){
//    debugger;
//    console.log('***************done********************');
//  })

// }


// module.exports=changeIndexName;

function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  debugger;
  compiler.plugin('emit', function(compilation, callback) {
    // 在生成文件中，创建一个头部字符串：
    debugger;
    var filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }

    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;