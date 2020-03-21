const mongoose = require('mongoose');

const { Schema,model } = mongoose;
const topicSchema = new Schema({
  __v:{type:Number,select:false},
  name:{type:String,required:false},
  avatar_url:{type:String},
  introduction:{
    type:String,select:false//如果文案过长，对性能消耗大，所以默认不可选
  }
})

 module.exports = model('Topic',topicSchema);
