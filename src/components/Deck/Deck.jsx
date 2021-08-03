import React from "react";

import "./Deck.css";

export default function Deck({ deck, drawCard, stand, constructDeck, increaseBet, currentPlayer }) {
  return (
    <div className="Deck">
      {/* {deck.length
        ? <h1>{deck[deck.length-1].value}</h1>
      :
      null} */}
      <div className="round-icon" onClick = {constructDeck}>🔄</div>
      <div className="deck-icon" onClick = {() => drawCard(currentPlayer)}>🃏</div>
      <div className="stand-icon" onClick={stand}>🤚</div>
      <div className="bet-icon" onClick={increaseBet}>💸</div>
    </div>
  );
}
