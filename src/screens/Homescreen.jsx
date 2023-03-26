import React from 'react'
import products from '../products'
export default function homescreen() {
  return (
    <div>
        <div className="row justify-content-center">
            {products.map(product=>{
                return <div className="col-md-3 m-5">
                    <h1>{product.name}</h1>
                    <img src={product.name} className='img-fluid' />
                    <h1>Rating: {product.rating}</h1>
                    <h1>Price: {product.price}</h1>
                </div>
            })}
        </div>      
    </div>
  )
}
