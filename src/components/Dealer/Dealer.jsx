import React from "react";
import "./Dealer.css";
import CardContainer from "../CardContainer/CardContainer";

export default function Dealer({
  dealerDeck,
  computerBalance,
  currentPlayer,
  computerTotal,
}) {
  console.log(dealerDeck);

  const calcTotal = () => {
    if (dealerDeck.length < 1) return 0;
    if (dealerDeck.length >= 1) {
      if (currentPlayer === 1) {
        if (["K", "Q", "J"].indexOf(dealerDeck[0].value) >= 0) {
          return 10;
        } else if (dealerDeck[0].value === "A") {
          return 11;
        } else {
          return dealerDeck[0].value;
        }
      } else {
        if (currentPlayer === 2) return computerTotal;
      }
    }
  };

  const realTotal = calcTotal();

  return (
    <div className="Dealer">
      <div className="card-bar">
        {/* Card Components, Balance*/}
        <ul className="dealer-card-slots">
          {dealerDeck.length
            ? dealerDeck.map((card, index) => {
                return (
                  <li
                    key={index}
                    className={
                      currentPlayer === 1 ? `dealer-card-${index}` : " "
                    }
                  >
                    <CardContainer card={card} />
                  </li>
                );
              })
            : null}
        </ul>
        <div>
          <p>Balance: {computerBalance}</p>
          {/* <p>Total: {`${currentPlayer === 1 ? dealerDeck[0].value : total}`}</p> */}
          <p>Total : {realTotal}</p>
        </div>
      </div>
    </div>
  );
}
