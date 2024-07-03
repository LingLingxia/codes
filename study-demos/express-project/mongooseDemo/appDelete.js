const mongoose = require("mongoose");
const newEmployee = require("./newEmployee");
const uri = require("./dbconfig");

mongoose.connect(uri,{dbName:"employeeDB"})
        .then(()=>{
            return newEmployee.deleteOne({age:{$lt:30},location:"New York"});
        })
        .then((data)=>{
            console.log(data);
            return newEmployee.deleteMany({emp_name:{$regex: "R"}})
        })
        .then((data)=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
        .finally(()=>{
            mongoose.connection.close();
        })
        
        
        
