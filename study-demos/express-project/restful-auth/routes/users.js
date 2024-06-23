const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  res.send( JSON.stringify({users},null,4))
});

function getDateFromString(strDate){
  let[dd,mm,yyyy] = strDate.split('-');
  return new Date(yyyy,mm-1,dd).getTime();
}
// GET Retrieve sorted  users
router.get("/sort",(req,res)=>{ //watch out: this router should be in front of /:email
  const result = [...users];
  result.sort((a,b)=>{
   return  getDateFromString(a.DOB)  - getDateFromString(b.DOB)
  })
  console.log(result);
  res.send(result);

});


// GET by email
router.get("/:email",(req,res)=>{
  const email = req.params.email;
  const user = users.filter(item=>item.email === email);
  res.send(user)
});


// POST request: Create a new user
router.post("/",(req,res)=>{

  const query = req.query;
  users.push({
    firstName: query.firstName,
    lastName: query.lastName,
    email: query.email,
    DOB:query.DOB,
  })
  res.send(`The user ${req.query.firstName} has been added!`)
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  const DOB = req.query.DOB
  const targetUser = users.find(item=>item.email === email);
  if(targetUser!==null && DOB){
    targetUser.DOB = DOB;
    res.send(`user with ${email} has been updated`)
  }else{
    res.send('Unable to find user');
  }
  
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((item)=>item.email!== email)
  res.send(`${email} has been deleted`)
});


router.get("/lastName/:lastName",(req,res)=>{
  const user = users.find(item=>item.lastName === req.params.lastName);
  if(user){
    res.send(user);
  }else{
    res.end("can not find user");
  }
});



module.exports=router;
