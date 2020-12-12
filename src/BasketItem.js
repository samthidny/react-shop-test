import React from 'react';

export default function BasketItem( {item } ) {
  return (
    <div>
      <p>Basket Item {item.name} -  {item.price} x {item.quantity}</p>
      
    </div>
  )
}
