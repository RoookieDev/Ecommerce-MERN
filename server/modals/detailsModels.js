const mongoose = require('mongoose');

const DeatailsScheme = new mongoose.Schema({
    userId:String,
    mobileNo:String,
    Address:String
},{timestamps:true});

module.exports = mongoose.model('DatailTable',DeatailsScheme);
