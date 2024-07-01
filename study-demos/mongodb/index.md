## start
```
start_mongo
db.version()
show dbs

```

## use password to link 
- Mz**************** is a password given by mongodb
```
mongosh -u root -p Mz****************  --authenticationDatabase admin local
```

## create or switch db
```
use training
```

## show collections
```
show connections
```

## create
```
db.createCollection("languages")
```

## insert 
```
db.languages.insertMany([
{"name":"java","type":"object oriented"},
{"name":"python","type":"general purpose"},
{"name":"scala","type":"functional"},
{"name":"c","type":"procedural"},
{"name":"c++","type":"object oriented"}
])
```
```
db.languages.insertOne({"name":"java","type":"object oriented"})
```
## count

```
db.languages.countDocuments()
```

## find
- find the first （can pass parameter）
```
db.languages.findOne()
```
- find all
```
db.languages.find()
```
- find top 3
```
db.languages.find().limit(3)
```
- find by name

```
db.languages.find({"name":"python"})

```

- find by type
```
db.languages.find({"type":"object oriented"})
```
- _id will always show except you remove it manually {"_id":0}
- find all and only show "name" field 
```
db.languages.find({},{"name":1})
```
- find all and remove "name" field in result.
```
db.languages.find({},{"name":0})
```
- find by type and only show "name" field
```
db.languages.find({"type":"object oriented"},{"name":1})
```

## update
- update all the document , add description
```
db.languages.updateMany({},{$set:{"description":"programming language"}})
```
- update by name ,add creator field
```
db.languages.updateMany({"name":"python"},{$set:{"creator":"Guido van Rossum"}})
```

- update by type ,add compiled field
```
db.languages.updateMany({"type":"object oriented"},{$set:{"compiled":true}})
```

## delete
- remove by name (old function, not recommended)
```
db.languages.remove({"name":"scala"})
```
- remove by type(old function, not recommended)
```
db.languages.remove({"type":"object oriented"})
```

- remove all(old function, not recommended)
```
db.languages.remove({})
```

```
deleteOne function
deleteMany function
```

# replace
```
db.languages.replaceOne({"name":"scala"},languageObject);
```

# exit
```
exit
```