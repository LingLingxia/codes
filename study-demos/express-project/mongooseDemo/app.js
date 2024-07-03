
const mongoose = require("mongoose");
const Employee = require("./employee");
const uri = require("../config/dbconfig")

mongoose.connect(uri,{"dbName":"employeeDB"});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })