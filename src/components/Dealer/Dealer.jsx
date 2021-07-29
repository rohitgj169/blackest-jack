import React from "react";
import "./Dealer.css";

export default function Dealer({ dealerDeck }) {
  console.log(dealerDeck);
  return (
    <div className="Dealer">
      Dealer Box
      <div className="card-bar">
        {/* Card Components, Balance*/}
        <div>Card Slots</div>
        <ul>
          {dealerDeck.length
            ? dealerDeck.map((card) => {
                return (
                  <li key={Math.random()}>{`${card.value} of ${card.suit}`}</li>
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
