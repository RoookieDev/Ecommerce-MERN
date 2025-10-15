// Contact Form Data
const contactModel = require('../modals/contactModel');
const contact = async(req,res)=>{
   try {
     const {firtName,lastName,mobileNo,emailAddress,message} = req.body;
    await contactModel.create({
        firtName:firtName,
        lastName:lastName,
        mobileNo:mobileNo,
        emailAddress:emailAddress,
        message:message
    })
    .then(data=> res.send({msg:'1'}))
    .catch(err=> res.send(err))
   } 
   
   catch (error) {
    res.send(error)
   }
}


module.exports = contact;