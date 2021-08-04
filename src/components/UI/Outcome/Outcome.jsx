import React from "react";
import "./Outcome.css";

export default function Outcome({ gameStatus, outcome, constructDeck }) {
  return (
    <div>
      {gameStatus !== 1 ? (
        <div className="game-outcome">
          {outcome}
          <div onClick={constructDeck} className="next-round">
            Next Round
          </div>
        </div>
      ) : null}
    </div>
  );
}
