import React from 'react'
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <Link className="battle-link" to="/battle">The Blackest Jack</Link>
      <div className="description">Welcome to Blackest Jack, a blackjack game created by <a href="https://github.com/mattius9">Matthew Krasucki</a> and <a href="http://rohitjacob.tech/">Rohit Jacob</a></div>
    </div>
  )
}
