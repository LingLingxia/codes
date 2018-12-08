const path=require('path');

module.exports={
    entry:'./source/entry1.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    mode:'development'
}