const mongoose = require('mongoose');
const Employee = require('./employee');
//only for test ,this is not a best practice
const uri =  "mongodb://adminUser:fullstack@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })