const cartTable = require('../modals/cartModel');
const addProduct = async(req,res) =>{
      const { productId, tokenId, userid } = req.body;
      cartTable.findOne({product_id:productId})
      .then(userProduct=>{
            if(userProduct){
                  if(userProduct.userId==userid){
                        res.send({msg:'e'});
                        return false;
                  }
                 
            }
            
            
                  cartTable.create({
                        userId:userid,
                        product_id:productId,
                        quantity:1
                  })
                  .then(data=> res.send({msg:'a'}))
                  .catch(err=> res.send(err))
            
      })
     
}

module.exports = addProduct;