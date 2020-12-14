import React, { useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import { formatCurrency, renderTime } from './utils';

export default function Basket({ basket }) {

  const [totalPrice, setTotalPrice] = useState( 0 );

  useEffect(() => {
    // Calculate price of basket
    let basketTotal = 0;
    basket.forEach((item) => {
      basketTotal += item.price * item.quantity;
    });
    setTotalPrice(basketTotal);
  }, [basket])

  return (
    <div>
      <h2>{renderTime()} - Your Basket - {formatCurrency(totalPrice)}</h2>
      {basket.map(item => {
        return <BasketItem key={item.id} item={item} />
      })}
    </div>
  )
}
