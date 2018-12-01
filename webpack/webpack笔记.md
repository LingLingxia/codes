###devtool

####inline-source-map 精确到行,浏览器可以看到loader转换后的webpack转换前的代码


###

|name|had source map|tips|
|:----|:----|:----|
|source-map|yes|map和打包之后的文件分离,有url指向map|
|hidden-source-map|yes|同上,无url指向map|
|inline-source-map|no|sourceMap和代码在同一文件内,所以它不能用在生产环境|
|nosources-source-map|只有一个sourcemap|不知如何使用|
|eval-source-map|no|代码即直接解析source-map,定位到列,loader未转换|
|eval|no|代码即直接解析源码|
|cheap-eval-source-map|no|loader转换后,定位到行|
|cheap-module-eval-source-map|no|定位到模块|
|cheap-module-source-map|无代码?|.|
|cheap-source-map|无代码?|.|

