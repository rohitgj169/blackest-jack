import React from 'react';
import Card from '../Card/Card';
import './Player.css';
import CardContainer from '../CardContainer/CardContainer';

export default function Player({playerDeck, playerTotal, playerBalance, betAmount}) {
  // console.log(playerDeck);
    return (
        <div className="Player">
            <div className="card-bar">
                {/* Card Components (max 5 slots), Bet Amount, Balance*/}
                <ul className="card-slots">
                  {playerDeck.length?
                    playerDeck.map((card,index) => {
                      return (
                        <li key={index}>
                          <CardContainer card = {card} />
                        </li>
                      )
                    })
                    : null
                  }
                </ul>
                <div>
                    <p>Bet Amount: {betAmount}</p>
                    <p>Balance: {playerBalance}</p>
                    <p>Total: {playerTotal}</p>
                </div>
            </div>
        </div>
    )
}
