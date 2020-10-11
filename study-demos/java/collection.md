# 常用集合及区别


## List 结构的集合类：

### ArrayList类，
内部用数组实现，适合尾部增加删除元素，以及查找元素
### LinkedList类，
内部用链表实现，可以在任意位置增加删除元素，但是遍历元素较慢
### Vector类
线程安全，数据量大，
Vector缺省情况 下自动增长原来一倍的数组长度，ArrayList是原来的50%。Vector增长的速度快。
### Stack类

## Map结构的集合类：

### HashMap类，
无序，线程不安全
### Hashtable类,
无序，线程安全
### TreeMap
有序


## Set结构的集合类：

### HashSet类
去重，无序
### TreeSet类
去重，有序

## Queue结构的集合类： 

Queue接口