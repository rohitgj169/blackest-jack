import React from "react";

import "./Deck.css";

export default function Deck({
  deck,
  drawCard,
  stand,
  constructDeck,
  increaseBet,
  currentPlayer,
  betAllow,
}) {
  return (
    <div className="Deck">
      <div className="deck-icon" onClick={() => drawCard(currentPlayer)}>
        🃏<p className="deck-text">Deal/Hit</p>
      </div>
      <div className="stand-icon" onClick={stand}>
        🤚<p className="stand-text">Stand</p>
      </div>
      <div
        className={`bet-icon ${betAllow ? "" : "hidden"}`}
        onClick={increaseBet}
      >
        💸<p className="bet-text">Bet</p>
      </div>
    </div>
  );
}
