import React from 'react';
import Player from '../../components/Player/Player';
import Dealer from '../../components/Dealer/Dealer';
import Deck from '../../components/Deck/Deck';

export default function BattlePage() {
  return (
    <div>
      BattlePage
      <Dealer/>
      <Deck/>
      <Player/>
    </div>
  )
}
