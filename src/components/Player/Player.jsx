import React from 'react';
import './Player.css';
import CardContainer from '../CardContainer/CardContainer';

export default function Player({playerDeck, playerTotal}) {
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
                    <p>Bet Amount:</p>
                    <p>Balance:</p>
                    <p>Total: {playerTotal}</p>
                </div>
            </div>
        </div>
    )
}
