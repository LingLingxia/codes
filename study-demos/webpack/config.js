const path=require('path');

module.exports={
    mode:'development',
    entry:'./source/entry1.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
}