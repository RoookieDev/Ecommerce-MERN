const mongoose = require('mongoose');

const buyModelSchema = new mongoose.Schema({
    productId:String,
    userEmail:String,
    price:Number,
    disprice:Number,
    tax:Number,
    totalPrice:Number,
    quantity:Number,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("BuyTable",buyModelSchema)