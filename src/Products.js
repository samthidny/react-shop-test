import React from 'react';
import Product from './Product';

export default function Products( { products, addToBasket, onQuantityChange } ) {
  
  function addToBasketHandler(product) {
    console.log('Product list add to basket', product.name);
    addToBasket(product);
  }
  
  return (
    <>
      <h2>Products</h2>
      {products.map(product =>  {
        return <Product key={product.id} item={ product } addToBasket={addToBasketHandler} />
      })}
    </>
  )
}
