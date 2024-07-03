const mongoose = require("mongoose");
const newEmployee = require("./newEmployee");
const uri = require("./dbconfig")

mongoose.connect(uri,{"dbName":"employeeDB"})
        .then(()=>{
            console.log("Connected to MongoDB");
            return newEmployee.insertMany([
                { "emp_name": "Ray Renolds", "age": 32, "location": "Austin", "email": "rayr@somewhere.com" },
                { "emp_name": "Matt Aniston", "age": 25, "location": "Houston", "email": "matta@somewhere.com" },
                { "emp_name": "Monica Perry", "age": 23, "location": "New Jersey", "email": "monicap@somewhere.com" },
                { "emp_name": "Rachel Tribbiani", "age": 28, "location": "Boston", "email": "rachelt@somewhere.com" }
            ])
        })
        .then(()=>{
            console.log("records inserted successfully");
            return newEmployee.find();
        })
        .then((data)=>{
            console.log("\n Documents in employees collection after insertMany:");
            console.log(data);
        })
        .catch(error=>{
            console.error("Error:",error);
        })
        .finally(()=>{
            mongoose.connection.close();
        })

