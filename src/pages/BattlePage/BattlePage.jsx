import "./BattlePage.css";
import React, { useState, useEffect, useRef } from "react";
import Player from "../../components/Player/Player";
import Dealer from "../../components/Dealer/Dealer";
import Deck from "../../components/Deck/Deck";
import cards from "../../utilities/cards";

export default function BattlePage() {
  const [currentDeck, setCurrentDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameStatus, setGameStatus] = useState(1); // Maybe 0 loss, 1 game on, 2 win?
  const [playerTotal, setPlayerTotal] = useState(0);
  const [computerTotal, setComputerTotal] = useState(0);


  const drawCard = (turn) => {
    let newCard = cards.draw(currentDeck);
    // setPlayerHand([...playerHand, newCard]);
    if (turn === 1)
      setPlayerHand((prevState) => {
        return [...prevState, newCard];
      });
    if (turn === 2)
      setComputerHand((prevState) => {
        return [...prevState, newCard];
      });
    // console.log(playerHand);
    // Check for bust
    let handTotal;
    if (turn === 1) {
      handTotal = cards.bustCheck(playerHand, currentPlayer);
      console.log("Player Hand: ", handTotal.total);
      if(handTotal.bust === true){
        setGameStatus(0);
        console.log("You loose")
      }
      if(handTotal.total === 21){
        
      }
    }
    if (turn === 2) {
      handTotal = cards.bustCheck(computerHand, currentPlayer);
      console.log("Computer Hand: ", handTotal.total);
      if(handTotal.bust === true){
        setGameStatus(2);
        console.log("You Win")
      }
    }
  };

  const constructDeck = () => {
    let newDeck = cards.deck();
    let shuffledDeck = cards.shuffle(newDeck);
    // console.log(shuffledDeck);
    setCurrentDeck(shuffledDeck);
    setPlayerHand([]);
    setComputerHand([]);
  };

  const dealCards = () => {
    // console.log(currentDeck);
    let hands = cards.deal(currentDeck);

    setPlayerHand([...hands[0]]);
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    console.log("Player Total",bustResult.total);
    setPlayerTotal(bustResult.total);
    setComputerHand([...hands[1]]);

  };
  
  // const playerTotalRef = useRef(0)

  // useEffect(() => {
  //   playerTotalRef.current = cards.bustCheck(playerHand, currentPlayer);
  // },[playerTotal])

  const help = () => {
    console.log("Player Hand =", playerHand);
    console.log("Computer Hand =", computerHand);
    console.log("Deck =", currentDeck);
  };

  const check = () => {
    if (currentPlayer === 1) cards.bustCheck(playerHand, currentPlayer);
    if (currentPlayer === 2) cards.bustCheck(computerHand, currentPlayer);
  };

  const stand = () => {
    setCurrentPlayer(2);
    cards.bustCheck(computerHand, currentPlayer);
  };
  useEffect(() => {
    constructDeck();
  }, []);

  return (
    <div className="battle-container">
      BattlePage
      <button onClick={() => drawCard(currentPlayer)}>Draw</button>
      <button onClick={constructDeck}>Round</button>
      <button onClick={dealCards}>Deal</button>
      <button onClick={help}>Show Hands</button>
      <button onClick={check}>Bust Check</button>
      <button onClick={stand}>Stand</button>
      <Dealer dealerDeck={computerHand}/>
      <Deck />
      <Player playerDeck={playerHand}/>
    </div>
  );
}
