import "./BattlePage.css";
import React, { useState, useEffect } from "react";
import Player from "../../components/Player/Player";
import Dealer from "../../components/Dealer/Dealer";
import Deck from "../../components/Deck/Deck";
import cards from "../../utilities/cards";

export default function BattlePage() {
  const [currentDeck, setCurrentDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameStatus, setGameStatus] = useState(1); //0 loss, 1 game on, 2 win, draw
  const [gameOutcome, setGameOutcome] = useState("");
  const [playerTotal, setPlayerTotal] = useState(0);
  const [computerTotal, setComputerTotal] = useState(0);
  const [roundProgress, setRoundProgress] = useState(false);

  const [cardDrawn, setCardDrawn] = useState(false);

  const drawCard = (turn) => {
    let newCard = cards.draw(currentDeck);

    if (turn === 1) {
      setPlayerHand((prevState) => {
        return [...prevState, newCard];
      });
    }
    if (turn === 2){
       setComputerHand((prevState) => {
        return [...prevState, newCard];
      });
    }
    // Check for bust
    let handTotal;
    if (turn === 1) {
      handTotal = cards.bustCheck(playerHand, currentPlayer);
      if (handTotal.bust === true) {
        setGameStatus(0);
      }
      if (handTotal.total === 21) {
      }
    }
    if (turn === 2) {
      handTotal = cards.bustCheck(computerHand, currentPlayer);
      if (handTotal.bust === true) {
        setGameStatus(2);
      }
    }
  };

  const constructDeck = () => {
    if (roundProgress) return;
    let newDeck = cards.deck();
    let shuffledDeck = cards.shuffle(newDeck);
    setCurrentDeck(shuffledDeck);
    setPlayerHand([]);
    setComputerHand([]);
    setRoundProgress(true);
    setGameStatus(1);
    setCurrentPlayer(1);
    setGameOutcome("In Progress");
  };

  const dealCards = () => {
    let hands = cards.deal(currentDeck);
    setPlayerHand(hands[0]);
    setComputerHand(hands[1]);

  };

  const help = () => {
    console.log("Deck = ", currentDeck);
    console.log("Player Hand =", playerHand);
    console.log("Computer Hand =", computerHand);
    console.log("Player Total =", playerTotal);
    console.log("Computer Total =", computerTotal);
  };

  const check = () => {
    if (currentPlayer === 1) cards.bustCheck(playerHand, currentPlayer);
    if (currentPlayer === 2) cards.bustCheck(computerHand, currentPlayer);
  };

  const stand = () => {
    if (currentPlayer === 1) {
      setCurrentPlayer(2);
      // cards.bustCheck(computerHand, currentPlayer);
    }
  };

  useEffect(() => { // Creates the deck and shuffles
    constructDeck();
  }, []);

  useEffect(() => { // This Use Effect sets the Current Player's Total
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    if(currentPlayer===1) setPlayerTotal(bustResult.total);
  }, [playerHand]);

  useEffect(() => { // This Use Effect sets the Current Player's Total
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    if(currentPlayer === 2)setComputerTotal(bustResult.total);
  }, [computerHand]);


  useEffect(() => { // This Use Effect sets the Game Outcome message
    if (gameStatus === 0) {
      setGameOutcome("Dealer Wins");
    }
    if (gameStatus === 2) {
      setGameOutcome("You Win");
    }
    if (gameStatus === 3) {
      setGameOutcome("Draw");
    }
    if (gameStatus ===1 ) {
      setGameOutcome("In Progress")
    }
  }, [roundProgress, gameStatus]);

  useEffect(() => { // sets Game status to lost once player busts
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    if (bustResult.bust) {
      setGameStatus(0);
      setRoundProgress(false);
    }
  }, [playerTotal]);

  useEffect(() => { // This Use Effect draws a card for the dealer if necessary
    if (currentPlayer===1) return;
    if (currentPlayer===2) {
      let bustResult = cards.bustCheck(computerHand, currentPlayer);
      if (computerTotal !== bustResult.total){
        setComputerTotal(bustResult.total);
      }
      if (bustResult.total > 21) {
        setGameStatus(2);
        setRoundProgress(false);
      }
      
      if (bustResult.total >= 17 && bustResult.total <=21) {
        if (computerTotal === playerTotal) {
          setGameStatus(3);
          setRoundProgress(false);
        }
        if (computerTotal > playerTotal) {
          setGameStatus(0);
          setRoundProgress(false);
        }
        if (computerTotal < playerTotal) {
          setGameStatus(2);
          setRoundProgress(false);
        }
      }

      if (bustResult.total < 17) {
        drawCard(2); // Asynchronous issue, does not update the computer Hand in time for comparison to player Hand
        setCardDrawn(true);
        return;
      }
      
    }
  }, [currentDeck,currentPlayer, computerHand, computerTotal]);

  return (
    <div className="battle-container">
      {gameOutcome}
      {gameStatus}
      {currentPlayer === 1 ? "Player Turn" : "Dealer Turn"}
      <button onClick={() => drawCard(currentPlayer)}>Draw</button>
      <button onClick={constructDeck}>Round</button>
      <button onClick={dealCards}>Deal</button>
      <button onClick={help}>Show Hands</button>
      <button onClick={check}>Bust Check</button>
      <button onClick={stand}>Stand</button>
      <Dealer dealerDeck={computerHand} />
      <Deck deck ={currentDeck}/>
      <Player playerDeck={playerHand} playerTotal={playerTotal} />
    </div>
  );
}
