import React from 'react'
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Link className="battle-link" to="/battle">The Blackest Jack</Link>
      <div className="intro">
        Welcome to Blackest Jack, web-based Blackjack game created by
        <a href="https://github.com/mattius9"> Matthew Krasucki </a> 
        and <a href="http://rohitjacob.tech/">Rohit Jacob</a>. 
      </div>
      <div className="description">
        <strong>How to Play:</strong> The objective of each round of 
        Blackjack is to collect cards in your hand with a combined value 
        as close to 21 as possible, without exceeding 21. If your hand 
        total goes over 21, you will <strong>Bust</strong>, losing the round. 
        <strong> Hit</strong> when you want to draw a card, and <strong>Stand </strong> 
        when you want to reveal the Dealer's hand. If the Dealer <strong>Busts</strong>, 
        or their hand total is less than your own, you win! A draw is reached if 
        both the Player and Dealer have the same hand total. Increase your 
        <strong> Bet</strong> if you are feeling lucky!
      </div>
    </div>
  )
}
