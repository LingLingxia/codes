const express = require("express");
const mongoose = require("mongoose");
const uri = require("../config/dbconfig");
const router = require("./routes/vendor_payment")
const port = 3000;
mongoose.connect(uri,{dbName:"paymentDB"});

const app = express();
app.use(express.json());

app.use("/venderPayments",router);
app.listen(port,()=>{
    console.log("server is running on "+ port)
})