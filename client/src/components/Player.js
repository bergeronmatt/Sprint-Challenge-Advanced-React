import React from 'react';

export default function Player (props){

    return(
        <div className='player-container'>
            {props.player.map(player => (
                <div key={player.id} className='player-card'>
                    <div>
                        <h3>{player.name}</h3>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}