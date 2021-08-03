import React from "react";

import "./Deck.css";

export default function Deck({ deck, drawCard, stand, constructDeck, increaseBet, currentPlayer }) {
  return (
    <div className="Deck">
      {/* {deck.length
        ? <h1>{deck[deck.length-1].value}</h1>
      :
      null} */}
      <div className="round-icon" onClick = {constructDeck}>🔄<p className="round-text">Next Round</p></div>
      <div className="deck-icon" onClick = {() => drawCard(currentPlayer)}>🃏<p className="deck-text">Deal/Hit</p></div>
      <div className="stand-icon" onClick={stand}>🤚<p className="stand-text">Stand</p></div>
      <div className="bet-icon" onClick={increaseBet}>💸<p className="bet-text">Bet</p></div>
    </div>
  );
}
