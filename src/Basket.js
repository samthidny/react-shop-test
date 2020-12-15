import React, { useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import { formatCurrency } from './utils';

export default function Basket({ basket, onBasketUpdate }) {

  const [totalPrice, setTotalPrice] = useState( 0 );

  useEffect(() => {
    // Calculate price of basket
    let basketTotal = 0;
    basket.forEach((item) => {
      basketTotal += item.price * item.quantity;
    });
    setTotalPrice(basketTotal);
  }, [basket]);

  function quantityUpdateHandler(item, newQuantity) {
    let clone = [...basket].map((basketItem) => {
      if (basketItem.id === item.id) {
        basketItem.quantity = newQuantity;
      }
      return basketItem;
    });
    
    onBasketUpdate(clone);
  }

  return (
    <div>
      <h2>Your Basket - {formatCurrency(totalPrice)}</h2>
      {basket.map(item => {
        return <BasketItem key={item.id} item={item} onQuantityUpdate={quantityUpdateHandler}/>
      })}
    </div>
  )
}
