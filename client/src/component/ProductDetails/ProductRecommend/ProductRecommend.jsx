import {React,useState} from 'react'
import { useParams } from 'react-router-dom'

// CSS LINK
import '../../../assets/css/ProductRecommend.css'
import { ProductCard } from '../../homepage/ProductPage/ProductCard';

const ProductRecommend = ({products}) => {

    const[prdName,setPrdName] = useState()

    // get Product id
    const prdId = useParams().id;
    const prd = products.find(item => item.id == prdId);
    const productName = prd.name.split(" ")[2]; 

    const recommend_card = products.filter(item=> item.name.includes(productName)&& item.id != prdId).slice(0,6);

    const col_size = 'col-md-4';
  return (
    <div className='productRecommend'>
      <div className="col-md-11 containers">
        <h5>Check out relates products</h5>
        <h2>Recommended Products</h2>
        <div className="row">
            {
                recommend_card.map(item=>{
                    return(<ProductCard col_size={col_size} name={item.name} price={item.price} rating={item.rating} img={item.image} index={item.id} id={item.id}/>)
                })
            }
            
            
        </div>
      </div>
    </div>
  )
}

export default ProductRecommend
