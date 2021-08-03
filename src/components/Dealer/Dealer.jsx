import React from "react";
import Card from "../Card/Card";
import "./Dealer.css";
import CardContainer from "../CardContainer/CardContainer";

export default function Dealer({ dealerDeck, computerBalance }) {
  // console.log(dealerDeck);
  return (
    <div className="Dealer">
      <div className="card-bar">
        {/* Card Components, Balance*/}
        <ul className="dealer-card-slots">
          {dealerDeck.length
            ? dealerDeck.map((card, index) => {
                return (
                  <li key={index}>
                      <CardContainer card = {card} />
                  </li>
                );
              })
            : null}
        </ul>
        <div>
          <p>Balance: {computerBalance}</p>
        </div>
      </div>
    </div>
  );
}
