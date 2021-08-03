import React from 'react'
import './Outcome.css'

export default function Outcome({gameStatus, outcome}) {
    return (
        
        <div>
            {gameStatus !== 1 
            ? 
                <div className="game-outcome">{outcome}</div>
            :
            null
            }

        </div>
    )
}
