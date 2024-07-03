const mongoose = require("mongoose");
const newEmployee = require("./newEmployee");
const uri = require("./dbconfig");

mongoose.connect(uri,{dbName:"employeeDB"})
        .then(()=>{
            return newEmployee.find();
        }).then((data)=>{
            console.log(data);
        }).catch(err=>{
            console.log(err);
        }).finally(()=>{
            mongoose.connection.close();
        })
