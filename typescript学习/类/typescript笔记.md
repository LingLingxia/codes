### 类
|修饰符|可以继承|外部(实例)|子类|说明
|:--|:--|:--|:--|:--|
|public|√|√|√||
|private|×|×|×|子类不可声明同名属性.如果类有private或者protected的属性,只有子类实例赋值给父类实例不存在兼容问题,其他的结构一样的类实例赋值也会导致问题,如果父类的构造函数参数有private的属性(假设此属性为meter),那么子类的构造函数的参数必须有一个没有任何修饰的meter,因为加了修饰就被重复定义了,public->public,protected->protected|
|protected|√|×|√|子类可以声明protected修饰的同名属性,本质上是重新声明了一遍,其实没有必要这么做.因为已经继承了. 把constructor函数定义为protected那么这个类只能被继承不能被实例化|
|readonly|√不可改|√不可改|√不可改|1.只能在定义或者构造函数初始化时赋值 2.对constructor的函数加readonly 可以变成readonly的实例属性|

### 抽象类和接口以及继承
 * class implements interface 定义一个类必须包含的属性和函数,无法使用修饰符
 * class extends abstract  定义一个类必须包含的属性和函数,并且可以使用修饰符
 * 类的静态属性也会被继承
 * Female extends Human 的本质是 Human.isPrototypeOf(Female)(只是在现代浏览器下,否则就是直接非原型复制属性了)