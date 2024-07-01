## how to add password 
- install mongosh ```brew install mongosh ```
- confirm mongosh installed ``` which mongosh```
- run mongosh ``` mongosh```
- switch to admin ```use admin ```
- create a role 
``` 
db.createUser({
  user: "adminUser",
  pwd: "fullstack",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
})
```
- enable authorization ,open config file ```sudo nano  /etc/mongod.conf``` 

- add config
```
security:
  authorization: "enabled"
```
- restart mongodb ``` brew services restart mongodb/brew/mongodb-community```
- use admin login ``` mongosh --username adminUser --password fullstack --authenticationDatabase admin```


## create other user with admin account 
- switch to database ``` use myDatabase ```
- createUser 
```
db.createUser({
  user: "appUser",
  pwd: "backend",
  roles: [{ role: "readWrite", db: "myDatabase" }]
})

```
- connect
 ```
mongosh --username appUser --password backend --authenticationDatabase myDatabase
```
