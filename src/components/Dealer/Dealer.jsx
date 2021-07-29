import React from 'react'
import './Dealer.css';

export default function Dealer({dealerDeck}) {
    return (
        <div className="Dealer">
            Dealer Box
            <div className="card-bar">
                {/* Card Components, Balance*/}
                <div>Card Slots</div>
                <ul>
                  {dealerDeck.map((card) => {
                    return (
                      <li key={card.value}>
                        {`${card.value} of ${card.suit}`}
                      </li>
                    )
                  })}
                </ul>
                <div>
                    <p>Balance:</p>
                </div>
            </div>
        </div>
    )
}
