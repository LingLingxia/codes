const express = require("express")
const app = express();
const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = "aVERYverySECRETstring"; 
// always generated by password generator and
// stored in the config file as an environment
app.use(express.json());// transfer request body and store it in req.body
app.post("/signin",(req,res)=>{
    const { name, pwd} = req.body;
    //如果账户密码正确，返回一个token
    if(name==="user" && pwd ==="password"){
        return res.json({
            token: jsonwebtoken.sign({
                user:"user"
            },
            JWT_SECRET
        )
        })
    }
    return res.status(401).json({message:"Invalid username or password"})


})

app.get("/employees",(req,res)=>{
    let tkn = req.header("Authorization");
    if(!tkn) return
    if(tkn.startsWith('Bearer ')){
      const  tokenValue = tkn.slice(7,tkn.length).trim();
      console.log(tokenValue);
      const verificationsStatus = jsonwebtoken.verify(tokenValue,JWT_SECRET);
      if(verificationsStatus.user === "user"){
        return res.status(200).json({
            message:"Access Successful to Employee Endpoint"
        })
      }
    }
    return res.status(401).send("No token");
})

app.listen(5001,()=>{
    console.log("app listen in 5001")
})