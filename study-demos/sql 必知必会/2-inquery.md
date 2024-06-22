
### 查询语句
- DISTINCT
```
SELECT DISTINCT vend_id
FROM Products

```
- LIMIT and OFFSET 注意OFFSET从0开始 （这是MYSQL 版 ，其他的数据库有差异）
```
SELECT  prod_name
FROM Products
LIMIT 5 OFFSET 5

```

### 排序
- ORDER BY (可以使用非检索列排序)
```
SELECT prod_name
FROM Products
ORDER BY prod_name
```
先按price排序，再按name排序
```
SELECT prod_id,prod_price,prod_name
FROM Products
ORDER BY prod_price,prod_name 
```
可以用行号，以上指令等于(不建议使用)

```
SELECT prod_id,prod_price,prod_name
FROM Products
ORDER BY 2，3
```

- DESC 降序
```
SELECT prod_id,prod_price,prod_name
FROM Products
ORDER BY prod_price DESC ,prod_name
```