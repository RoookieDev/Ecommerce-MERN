

// get user details 
const userModals = require('../modals/userModal');
const detailsModel = require('../modals/detailsModels');

// function
const userDataTable = async(req,res)=>{
    const userId = '68b75f866af432e2d79d4239';
    const id = req.params.id;
    userModals.findById(id)
    .then(data=> res.send(data))
    .catch(err=> res.send(id));
}

const UpdateDetails = async(req,res)=>{
    const userId = req.params.userId;
    const{name,email,mobile,address}=req.body;
    const filter = {id:userId}
    const update = {$set:{name:name,email:email,mobile:mobile,address:address}}
    userModals.updateOne(filter,update)
    .then(data=> res.send({ msg:'updated'}))
    .catch(err=>res.send(err));
    
}
module.exports = {userDataTable,UpdateDetails};