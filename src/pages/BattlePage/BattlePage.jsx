import "./BattlePage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Player from "../../components/Player/Player";
import Dealer from "../../components/Dealer/Dealer";
import Deck from "../../components/Deck/Deck";
import Outcome from "../../components/UI/Outcome/Outcome";
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
  const [betAllow, setBetAllow] = useState(true);

  const [betAmount, setBetAmount] = useState(10);
  const [playerBalance, setPlayerBalance] = useState(1000);
  const [computerBalance, setComputerBalance] = useState(1000);

  const drawCard = (turn) => {
    setBetAllow(false);
    if (currentDeck.length === 52) {
      dealCards();
      return;
    }

    let newCard = cards.draw(currentDeck);

    if (turn === 1) {
      setPlayerHand((prevState) => {
        return [...prevState, newCard];
      });
    }
    if (turn === 2) {
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
    setBetAllow(true);
    setBetAmount(0);
  };

  const dealCards = () => {
    let hands = cards.deal(currentDeck);
    setPlayerHand(hands[0]);
    setComputerHand(hands[1]);
    setBetAllow(false);
  };

  // const help = () => {
  //   console.log("Deck = ", currentDeck);
  //   console.log("Player Hand =", playerHand);
  //   console.log("Computer Hand =", computerHand);
  //   console.log("Player Total =", playerTotal);
  //   console.log("Computer Total =", computerTotal);
  // };

  // const check = () => {
  //   if (currentPlayer === 1) cards.bustCheck(playerHand, currentPlayer);
  //   if (currentPlayer === 2) cards.bustCheck(computerHand, currentPlayer);
  // };

  const stand = () => {
    if (currentPlayer === 1) {
      setCurrentPlayer(2);
      // cards.bustCheck(computerHand, currentPlayer);
    }
  };

  const increaseBet = () => {
    setBetAmount((prevState) => {
      return prevState + 10;
    });
  };


  useEffect(() => {
    // Creates the deck and shuffles
    constructDeck();
    // dealCards();
  }, []);

  useEffect(() => {
    // This Use Effect sets the Current Player's Total
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    if (currentPlayer === 1) setPlayerTotal(bustResult.total);
  }, [playerHand]);

  useEffect(() => {
    // This Use Effect sets the Current Player's Total
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    if (currentPlayer === 2) setComputerTotal(bustResult.total);
  }, [computerHand]);

  useEffect(() => {
    // This Use Effect sets the Game Outcome message
    if (gameStatus === 0) {
      setGameOutcome("Dealer Wins");
      setComputerBalance(computerBalance + betAmount);
      setPlayerBalance(playerBalance - betAmount);
    }
    if (gameStatus === 2) {
      setGameOutcome("You Win");
      setComputerBalance(computerBalance - betAmount);
      setPlayerBalance(playerBalance + betAmount);
    }
    if (gameStatus === 3) {
      setGameOutcome("Draw");
    }
    if (gameStatus === 1) {
      setGameOutcome("In Progress");
    }
  }, [roundProgress, gameStatus]);

  useEffect(() => {
    // sets Game status to lost once player busts
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    if (bustResult.bust) {
      setGameStatus(0);
      setRoundProgress(false);
    }
  }, [playerTotal]);

  useEffect(() => {
    // This Use Effect draws a card for the dealer if necessary
    if (currentPlayer === 1) return;
    if (currentPlayer === 2) {
      let bustResult = cards.bustCheck(computerHand, currentPlayer);
      if (computerTotal !== bustResult.total) {
        setComputerTotal(bustResult.total);
      }
      if (bustResult.total > 21) {
        setGameStatus(2);
        setRoundProgress(false);
      }

      if (bustResult.total >= 17 && bustResult.total <= 21) {
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
        drawCard(2);
        return;
      }
    }
  }, [currentDeck, currentPlayer, computerHand, computerTotal]);

  return (
    <div className="battle-container">
      <Link className="home-link" to="/home">
        Home
      </Link>
      <Dealer
        dealerDeck={computerHand}
        computerBalance={computerBalance}
        currentPlayer={currentPlayer}
        computerTotal={computerTotal}
      />
      <Deck
        deck={currentDeck}
        betAllow={betAllow}
        currentPlayer={currentPlayer}
        drawCard={drawCard}
        stand={stand}
        constructDeck={constructDeck}
        increaseBet={increaseBet}
      />
      <Player
        playerDeck={playerHand}
        playerTotal={playerTotal}
        betAmount={betAmount}
        playerBalance={playerBalance}
      />
      <Outcome
        className="game-outcome"
        gameStatus={gameStatus}
        outcome={gameOutcome}
        constructDeck={constructDeck}
      />
    </div>
  );
}
