### filter data
- WHERE
```
SELECT prod_name,prod_price
FROM Products
WHERE prod_price = 3.49
```
ORDER BY 应该位于WHERE之后

| 常用操作符| 说明|
|:--|:--|
|= ||
| <>|不等于|
| !=||
|< ||
| <=||
| !<|不小于|
| >||
| >=||
| !>|不大于|
|BETWEEN||
|IS NULL||
- BETWEEN
```
SELECT prod_name,prod_price
FROM Products
WHERE prod_price BETWEEN 5 AND 10
```

- IS NULL （IS NOT NULL）
检查值为NULL 不可以用 = NULL

```
SELECT cust_name
FROM CUSTOMERS
WHERE cust_email IS NULL
```

- AND
```
SELECT prod_id, prod_name,prod_price
FROM Products
WHERE vend_id= 'DLL01' AND prod_price <=4 
```
- OR
```
SELECT prod_id, prod_name,prod_price
FROM Products
WHERE vend_id= 'DLL01' OR vend_id - 'BRS01'
```

有多个条件时，多用括号，避免非预期结果
```
SELECT prod_id, prod_name,prod_price
FROM Products
WHERE (vend_id= 'DLL01' OR vend_id = 'BRS01')
AND prod_price >=10
```

- IN
在简单的句子中 和OR的功能相同，它的注意优点为，1.多个值更好管理，2.可以包含其他的SELECT语句
```
SELECT  prod_name,prod_price
FROM Products
WHERE vend_id IN ('BRS01', 'DLL01')
ORDER BY prod_name
```

- NOT
```
SELECT  prod_name,prod_price
FROM Products
WHERE vend_id NOT IN ('BRS01', 'DLL01')
ORDER BY prod_name
```

- LIKE  and  wildcard % _
- %匹配0—n ，可以放在string的任意位置 '%bean bag%' ,许多数据库会自动给字符串尾部填充空格，好的办法是用函数去掉空格
```
SELECT prod_id,prod_name
FROM Products
WHERE prod_name LIKE 'FISH%'
```
_ 匹配一个字符,以下语句有两个_
```
SELECT prod_id,prod_name
FROM Products
WHERE prod_name LIKE '__ inch teddy bear'

```

12 inch teddy bear ✅
8 inch teddy bear ❌

-[] 方括号，或者，跟正则regular expression很像
```
SELECT cust_contact
FROM Customers
WHERE cust_contact LIKE '[JM]%'
```
也可以用否定 '[^JM]%'

### 不要过度使用wildcard，优先选择其他操作符（operator）
### 尽量不要把wildcard放在开始处，影响速度