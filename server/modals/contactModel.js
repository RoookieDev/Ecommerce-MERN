const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firtName:{
        type:String, 
        required:true
    },
    lastName:{  
        type:String,    
        required:true
    },
    mobileNo:{
        type:String,    
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:false
    }
},
{timestamps:true}
)

module.exports = mongoose.model('contact',ContactSchema);