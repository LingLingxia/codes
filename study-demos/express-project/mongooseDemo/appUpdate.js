const mongoose = require("mongoose");
const newEmployee = require("./newEmployee");
const uri = require("../config/dbconfig");

mongoose.connect(uri,{dbName:"employeeDB"})
        .then(()=>{
            console.log("Connected to MongoDB");
            return newEmployee.updateOne({
                emp_name:"John Doe"
            },
            {
                email:"jdoe222@somewhere.com"
            }
        )
        })
        .then(result=>{
            console.log(result);
            return newEmployee.updateMany({age:{$gt:30}},{location:"new york"})
        }).then(data=>{
            console.log(" find all document")
            console.log(data);
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=>{
            mongoose.connection.close();
        })