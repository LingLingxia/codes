const mongoose = require("mongoose");
const newEmployee = require("./newEmployee");
const uri = require("./dbconfig")

mongoose.connect(uri,{"dbName":"employeeDB"});

let employee = new newEmployee({
    emp_name: 'John Doe',
    age: 37,
    location: "Illinois",
    email: "jdoe@somewhere.com"
})

employee.save().then(function(){
    newEmployee.find().then(data=>{
        console.log("\n\n Documents in employees collections after insertOne")
        console.log(data);
        mongoose.connection.close();
    })
}).catch(function(error){
    console.log(error)
})