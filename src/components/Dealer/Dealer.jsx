import React from "react";
import "./Dealer.css";
import CardContainer from "../CardContainer/CardContainer";

export default function Dealer({ dealerDeck, computerBalance, currentPlayer }) {
  // console.log(dealerDeck);
  return (
    <div className="Dealer">
      <div className="card-bar">
        {/* Card Components, Balance*/}
        <ul className="dealer-card-slots">
          {dealerDeck.length
            ? dealerDeck.map((card, index) => {
                return (
                  <li key={index} className={currentPlayer===1?`dealer-card-${index}`:" "}> 
                      <CardContainer card = {card}/>
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
