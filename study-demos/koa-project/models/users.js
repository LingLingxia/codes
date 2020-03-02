const mongoose = require('mongoose');

const { Schema,model } = mongoose;
const userSchema = new Schema({
  __v:{type:Number,select:false},
  name:{ type:String,required:true },
  password:{type:String, required:true, select:false }
})

 module.exports = model('User',userSchema);
// function find(ctx){
//   return [{name:'lilie'},{name:'hanmeimei'}];
// }
// module.exports = {
//   find
// }