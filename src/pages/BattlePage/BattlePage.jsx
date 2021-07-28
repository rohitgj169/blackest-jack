import React, {useState} from 'react';
import Player from '../../components/Player/Player';
import Dealer from '../../components/Dealer/Dealer';
import Deck from '../../components/Deck/Deck';
import { deck } from '../../utilities/cards';

export default function BattlePage() {
  var newDeck = new deck();
  console.log(newDeck);

  const [currentDeck, setCurrentDeck] = useState(newDeck);
  return (
    <div>
      BattlePage
      <Dealer/>
      <Deck/>
      <Player/>
    </div>
  )
}
