import React from 'react'
import './CardContainer.css';

export default function CardContainer({card}) {
  return (
    <div className="card">
      {/* {`${card.value} of ${card.suit}`} */}
      <h2 className = "card-suit-top">{card.suit}</h2>
      <h1 className = "card-value">{card.value}</h1>
      <h2 className = "card-suit-bottom">{card.suit}</h2>
      
    </div>
  )
}
