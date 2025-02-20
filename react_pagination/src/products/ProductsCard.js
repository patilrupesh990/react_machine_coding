import React from 'react'

function ProductsCard({product}) {
    
  return (

    <div className='product-cart'>
        <div ><img className='product-img' src={product?.thumbnail} alt={product.title}/></div>
        <hr/>
        <div>{product?.title}</div>
    </div>
  )
}

export default ProductsCard