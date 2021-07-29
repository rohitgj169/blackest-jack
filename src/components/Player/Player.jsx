import React from 'react';
import './Player.css';

export default function Player({playerDeck}) {
  console.log(playerDeck);
    return (
        <div className="Player">
            Player Box
            <div className="card-bar">
                {/* Card Components (max 5 slots), Bet Amount, Balance*/}
                <div>Card Slots</div>
                <ul>
                  {playerDeck.map((card) => {
                    return (
                      <li key={Math.random()}>
                        {`${card.value} of ${card.suit}`}
                      </li>
                    )
                  })}
                </ul>
                <div>
                    <p>Bet Amount:</p>
                    <p>Balance:</p>
                </div>
            </div>
        </div>
    )
}
