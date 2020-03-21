const mongoose = require('mongoose');

const { Schema,model } = mongoose;
const userSchema = new Schema({
  __v:{type:Number,select:false},
  name:{ type:String,required:true},
  password:{type:String, required:true },
  avatar_url:{type:String},
  gender:{type:String,enum:['male','female'],default:'male'},
  headline:{type:String,select:false},
  locations:{type:[{type:String}],select:false},
  business:{type:String,select:false},
  employments:{
    type:[{
      company:{type:String},
      job:{type:String},
    }],
    select:false
  },
  educations: {
    type: [{
      school: { type:String},
      major: { type: String},
      diploma: { type: Number, enum: [1, 2, 3, 4, 5] },
      entrance_year: { type: Number },
      graduation_year: { type: Number },
    }],
    select: false,
  },
  followings:{
    type:[{
      type:Schema.Types.ObjectId,ref:'User'//外健
    }],
    select:false
  }
})

 module.exports = model('User',userSchema);
// function find(ctx){
//   return [{name:'lilie'},{name:'hanmeimei'}];
// }
// module.exports = {
//   find
// }