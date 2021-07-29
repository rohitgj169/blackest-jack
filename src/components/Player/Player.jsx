import React from 'react';
import './Player.css';

export default function Player({playerDeck, playerTotal}) {
  console.log(playerDeck);
    return (
        <div className="Player">
            Player Box
            <div className="card-bar">
                {/* Card Components (max 5 slots), Bet Amount, Balance*/}
                <div>Card Slots</div>
                <ul>
                  {playerDeck.length?
                    playerDeck.map((card) => {
                      return (
                        <li key={Math.random()}>
                          {`${card.value} of ${card.suit}`}
                        </li>
                      )
                    })
                    : null
                  }
                </ul>
                <div>
                    <p>Bet Amount:</p>
                    <p>Balance:</p>
                    <p>Total: {playerTotal}</p>
                </div>
            </div>
        </div>
    )
}
