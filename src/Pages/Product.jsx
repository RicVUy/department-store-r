import React, { useContext } from 'react'
import Breadcrum from '../component/Breadcrums/Breadcrum'
import  ShopContextProvider  from '../Context/ShopContextProvider'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../component/DescriptionBox/DescriptionBox'
import RelatedProducts from '../component/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContextProvider)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div> 
  )
}

export default Product