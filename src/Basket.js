import React, { useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import { formatCurrency } from './utils';

export default function Basket({ basket }) {

  const [totalPrice, setTotalPrice] = useState( 0 );

  useEffect(() => {
    console.log('Basket useEffect basket changed', basket.length);
    // Calculate price of basket
    let t = 0;
    basket.forEach((item) => {
      t += item.price * item.quantity;
    });
    console.log('total price ', t);
    setTotalPrice(t);
  }, [basket])

  return (
    <div>
      <h2>Your Basket - {formatCurrency(totalPrice)}</h2>
      {basket.map(item => {
        return <BasketItem key={item.id} item={item} />
      })}
    </div>
  )
}
