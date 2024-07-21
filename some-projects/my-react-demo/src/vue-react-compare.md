## react笔记

### 小记
- 虽然非受控组件代码更少，但还是推荐使用受控组件
- vue的属性必须先在date定义才能使用，而react可以随处定义
- vue的props必须先声明才能使用，还可以设置初始值，校验变量类型，react直接使用
- react的props默认有一个key，不传就是undefined
ref属性还待了解
### 生命周期函数
|生命周期|vue|react|
|--:|--:|--:|
|实例挂载前|created|componentDidMount|
|实例挂载后|mounted|componentWillUnmount|
|||

### 全局数据传递
- vue vuex
- react context  往下传递很多层是可以的，但是事件往上冒泡改函数的时候的时候不好改，不好改。

### 路由
- vue router
- react router(react-router-dom)
### ref
vue 直接指定ref=name 用this.$ref[name]去访问
react 没看懂


### 调试工具
vue
react

### 插件
vue vue.use()
react 

### redux
- createStore接受一个函数reducer作为参数，reducer接受一个state和action作为参数，返回处理过后的state
- state就是当前的数据值，action是一个对象有两个key,type and payload，