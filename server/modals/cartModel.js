const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    userId:String,
    userEmail:String,
    product_id:Number,
    quantity:Number
},{
    collection:"UserCart",
})

module.exports=mongoose.model("UserCart", cartSchema);