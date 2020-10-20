## 基础配置

- 安装服务：mysqld --install
 
- 初始化：　mysqld --initialize --console
 
- 开启服务：net start mysql
 
- 关闭服务：net stop mysql
 
- 登录mysql：mysql -u root -p
 
　　　　Enter PassWord：(密码)
 
- 修改密码：alter user 'root'@'localhost' identified by '新的密码';(by 接着的是密码)
 
- 标记删除mysql服务：sc delete mysql

- 退出
```
mysql > exit;
mysql > quit;
mysql > \q;
```

### 新增用户
create user 'test01'@'localhost' identified by '123456';
//用户未授权的时候可以看见一个数据库 'information_schema'

### 授权用户
将testDBForTest01数据库*（增，查，改权限）授权给test01用户
```
create database testDBForTest01//创建数据库

grant all privileges on `testDBForTest01`.* to 'test01'@'localhost';//授权

ALTER USER  'test01'@'localhost' identified with mysql_native_password by '1234567' //修改密码，可以省略

```  
## 数据库

### 创建数据库

create database <数据库名>

### 显示数据库
show databases

### 删除数据库
drop database <数据库名>

### 连接数据库
例如：如果xhkdb数据库存在，尝试存取它：
   mysql> use xhkdb;
屏幕提示：Database changed

### 显示当前选择的数据库
select database();

## 数据表
例如，建立一个名为MyClass的表，
|字段名|	数字类型|	数据宽度|	是否为空|	是否主键 /	自动增加/默认值|
|:--|:--|:--|:--|:--|
|id	|int|	4	|否|	primary key/	auto_increment/--	| 
|name|	char	|20|	否	 	 |	| 
|sex	|int|	4	|否	| 	 /--/--/0|
|degree|	double|	16|	是	| 	| 	 

### 新建数据表
```
create table MyClass(
    id int(4) not null primary key auto_increment,
    name char(20) not null,
    sex int(4) not null default '0',
    degree double(16,2);
)
```

### 查看数据表

show tables;

### 删除数据表

drop table <数据表名>

### 向数据表插入数据
insert into myClass values (1,"llx",1,90)

### 查询数据
```
select * from myclass order by id limit 1,2
select * from myClass where id=1
select name,sex from myclass where id>1

``` 
### 删除数据
delete from myclass where id = 1

### 更新数据

update myclass set name="mary" where id=1
