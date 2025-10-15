const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:Number,
    address:String
})

module.exports=mongoose.model("UserData",userSchema);