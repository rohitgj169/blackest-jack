import React from "react";

import "./Deck.css";

export default function Deck({ deck }) {
  return (
    <div className="Deck">
      {deck.length
        ? <h1>{deck[deck.length-1].value}</h1>
      :
      null}
      
    </div>
  );
}
