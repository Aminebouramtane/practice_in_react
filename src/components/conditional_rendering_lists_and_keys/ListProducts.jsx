import React from 'react'
import ProductData from './products-data';
import ProductComponent from './ProductComponent';

const ListProducts = () => {

  return (
    <div className='container'>
        <div className="row">
            {ProductData.map(
                (product)=>
                    <ProductComponent key={ProductData.id} products={product}/>
            )}
        </div>
    </div>
  )
}

export default ListProducts