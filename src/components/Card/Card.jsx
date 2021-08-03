import "./Card.css";
import React from 'react';


export default function Card({ cardValue, cardSuit }) {
  return (
    <div className="single-card-container">
      {cardValue} of {cardSuit}
    </div>
  )
}
