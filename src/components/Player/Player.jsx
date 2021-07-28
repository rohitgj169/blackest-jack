import React from 'react';
import './Player.css';

export default function Player() {
    return (
        <div className="Player">
            Player Box
            <div className="card-bar">
                {/* Card Components (max 5 slots), Bet Amount, Balance*/}
                <div>Card Slots</div>
                <div>
                    <p>Bet Amount:</p>
                    <p>Balance:</p>
                </div>
            </div>
        </div>
    )
}
