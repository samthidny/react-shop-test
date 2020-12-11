import React from 'react'
import BasketItem from './BasketItem'

export default function Basket({ basket }) {
  return (
    basket.map(item => {
        return <BasketItem key={item.id} item={item} />
      })

  )
}
