import './App.css';
import Player from './components/Player/Player';
import Dealer from './components/Dealer/Dealer';
import Deck from './components/Deck/Deck';
import React, {useState} from 'react';
import {deck} from './utilities/cards';

function App() {
  var newDeck = new deck();
  console.log(newDeck);

  const [deckState, setDeckState] = useState(newDeck);


  return (
    <div className="App">
      <Dealer/>
      <Deck deckState={deckState} setDeckState={setDeckState}/>
      <Player/>
    </div>
  );
}

export default App;
