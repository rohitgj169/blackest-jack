import React from 'react'
import './Dealer.css';

export default function Dealer() {
    return (
        <div className="Dealer">
            Dealer Box
            <div className="card-bar">
                {/* Card Components, Balance*/}
                <div>Card Slots</div>
                <div>
                    <p>Balance:</p>
                </div>
            </div>
        </div>
    )
}
