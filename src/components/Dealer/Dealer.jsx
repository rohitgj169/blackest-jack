import React from "react";
import Card from "../Card/Card";
import "./Dealer.css";

export default function Dealer({ dealerDeck }) {
  // console.log(dealerDeck);
  return (
    <div className="Dealer">
      Dealer Box
      <div className="card-bar">
        {/* Card Components, Balance*/}
        <ul className="card-container">
          {dealerDeck.length
            ? dealerDeck.map((card, index) => {
                return (
                  <li key={Math.random()}>
                    <Card cardValue={card.value} cardSuit={card.suit}/>
                  </li>
                );
              })
            : null}
        </ul>
        <div>
          <p>Balance:</p>
        </div>
      </div>
    </div>
  );
}
