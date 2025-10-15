import React from 'react'

// JSON FILE
import products from '../../assets/json_data/headphone_prd.json';


import { ProductDetails } from './ProductPreview/ProductDetails'
import ProductRecommend from './ProductRecommend/ProductRecommend';

const ProductData = () => {
  return (
    <div>
      <ProductDetails products={products}/>
      <ProductRecommend products={products}/>
    </div>
  )
}

export default ProductData
