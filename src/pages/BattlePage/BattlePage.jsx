import "./BattlePage.css"
import React, {useState, useEffect} from 'react';
import Player from '../../components/Player/Player';
import Dealer from '../../components/Dealer/Dealer';
import Deck from '../../components/Deck/Deck';
import cards from '../../utilities/cards';


export default function BattlePage() {
    
  const [currentDeck, setCurrentDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);


  const drawCard = () => {
    let newCard = cards.draw(currentDeck);
    // setPlayerHand([...playerHand, newCard]);
    setPlayerHand((prevState) => {
      return [...prevState, newCard];
    })
    console.log(playerHand);
  }

  const constructDeck = () => {
    let newDeck = cards.deck();
    let shuffledDeck = cards.shuffle(newDeck);
    console.log(shuffledDeck);
    setCurrentDeck(shuffledDeck);
    setPlayerHand([]);
    setComputerHand([]);
  }

  const dealCards = () => {
    console.log(currentDeck);
    let hands = cards.deal(currentDeck);

    setPlayerHand([...hands[0]]);
    // setPlayerHand((prevState) => {
    //   return [...prevState, ...hands[0]];
    // });
    setComputerHand([...hands[1]]);
    // setComputerHand((prevState) => {
    //   return [...prevState,...hands[1]];
    // })
  }

  const help = () => {
    console.log("Player Hand =",playerHand);
    console.log("Computer Hand =",computerHand);
    console.log("Deck =",currentDeck);
  }

  const check = () => {
    cards.bustCheck(playerHand);
  }
  
  useEffect(() => {
    constructDeck();
  },[])

  return (
    <div className="battle-container">
      BattlePage
      <button onClick={drawCard}>Draw</button>
      <button onClick={constructDeck}>Round</button>
      <button onClick={dealCards}>Deal</button>
      <button onClick={help}>Show Hands</button>
      <button onClick={check}>Bust Check</button>
      <Dealer/>
      <Deck/>
      <Player/>
    </div>
  )
}
