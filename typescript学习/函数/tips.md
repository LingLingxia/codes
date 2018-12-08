### 默认参数
* 当为函数指定了默认参数的时候传入undefined会使用默认参数,null不会.
* 传入null的时候会强制类型转换为指定类型  null:string = null;null:number = 0;