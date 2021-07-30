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

  useEffect(() => {
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    if (bustResult.bust) {
      setGameStatus(0);
      // console.log("Over 21");
      setRoundProgress(false);
    }
    if (!bustResult.bust) console.log("Under 21");
  }, [playerTotal]);

  useEffect(() => {
    let bustResult = cards.bustCheck(computerHand, currentPlayer);
    if (bustResult.total > 21) {
      setGameStatus(2);
      // console.log("Over 21");
      setRoundProgress(false);
    }
    if (bustResult.total < 17) {
      // console.log("Dealer should draw");
    }
    // if (bustResult.total <= 17 && bustResult.total >= 21) {
    //   console.log("Dealer Stands");
    //   if (computerTotal === playerTotal) {
    //     // console.log("Draw");
    //     setGameStatus(3);
    //     setRoundProgress(false);
    //   }
    //   if (computerTotal > playerTotal) {
    //     // console.log("Dealer Win");
    //     setGameStatus(0);
    //     setRoundProgress(false);
    //   }
    //   if (computerTotal < playerTotal) {
    //     // console.log("Player Win");
    //     setGameStatus(1);
    //     setRoundProgress(false);
    //   }
    // }

    if (bustResult.total === 21 && playerTotal === 21) {
      console.log("Draw");
      setGameStatus(3);
      setRoundProgress(false);
    }

    if (!bustResult.bust) {
      console.log("Under 21");
    }
  }, [computerTotal]);

  const drawCard = (turn) => {
    let newCard = cards.draw(currentDeck);
    if (turn === 1) {
      setPlayerHand((prevState) => {
        return [...prevState, newCard];
      });
      // console.log(playerTotal);
    }
    if (turn === 2)
      setComputerHand((prevState) => {
        return [...prevState, newCard];
      });
    console.log(playerHand);
    // Check for bust
    let handTotal;
    if (turn === 1) {
      handTotal = cards.bustCheck(playerHand, currentPlayer);
      // console.log("Player Hand: ", handTotal.total);
      if (handTotal.bust === true) {
        setGameStatus(0);
      }
      if (handTotal.total === 21) {
      }
    }
    if (turn === 2) {
      handTotal = cards.bustCheck(computerHand, currentPlayer);
      // console.log("Computer Hand: ", handTotal.total);
      if (handTotal.bust === true) {
        setGameStatus(2);
      }
    }
  };

  const constructDeck = () => {
    if (roundProgress) return;
    let newDeck = cards.deck();
    let shuffledDeck = cards.shuffle(newDeck);
    // console.log(shuffledDeck);
    setCurrentDeck(shuffledDeck);
    setPlayerHand([]);
    setComputerHand([]);
    setRoundProgress(true);
    setGameStatus(1);
    setCurrentPlayer(1);
    setGameOutcome("");
  };

  const dealCards = () => {
    // console.log(currentDeck);
    let hands = cards.deal(currentDeck);
    // console.log(hands);
    setPlayerHand([...hands[0]]); // Player hand not updating synchronously
    // console.log(playerHand);
    setComputerHand([...hands[1]]);
  };

  const help = () => {
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
  useEffect(() => {
    constructDeck();
  }, []);

  useEffect(() => {
    let bustResult = cards.bustCheck(playerHand, currentPlayer);
    // console.log(bustResult);
    // console.log("Player Total", bustResult.total);
    setPlayerTotal(bustResult.total);
  }, [playerHand]);

  useEffect(() => {
    let bustResult = cards.bustCheck(computerHand, currentPlayer);
    // console.log("Computer Total", bustResult.total);
    setComputerTotal(bustResult.total);
  }, [computerHand]);

  useEffect(() => {
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
  }, [roundProgress]);

  useEffect(() => {
    if (currentPlayer===1) return;
    if (currentPlayer === 2) {
      let bustResult = cards.bustCheck(computerHand, currentPlayer);
      if (bustResult.total < 17) {
        drawCard(2);
      }
      if (bustResult.total >= 17 && bustResult.total <=21) {
        if (computerTotal === playerTotal) {
          console.log("Draw");
          setGameStatus(3);
          setRoundProgress(false);
        }
        if (computerTotal > playerTotal) {
          console.log("Dealer Win");
          setGameStatus(0);
          setRoundProgress(false);
        }
        if (computerTotal < playerTotal) {
          console.log("Player Win");
          setGameStatus(1);
          setRoundProgress(false);
        }
      }
      if (bustResult.total === 21 && playerTotal === 21) {
        console.log("Draw");
        setGameStatus(3);
        setRoundProgress(false);
      }
    }
  }, [currentPlayer, computerHand]);

  return (
    <div className="battle-container">
      {gameOutcome}
      <button onClick={() => drawCard(currentPlayer)}>Draw</button>
      <button onClick={constructDeck}>Round</button>
      <button onClick={dealCards}>Deal</button>
      <button onClick={help}>Show Hands</button>
      <button onClick={check}>Bust Check</button>
      <button onClick={stand}>Stand</button>
      <Dealer dealerDeck={computerHand} />
      <Deck />
      <Player playerDeck={playerHand} playerTotal={playerTotal} />
    </div>
  );
}
