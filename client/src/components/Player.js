import React, { useState, useCallback}from 'react';
import useEventListener from './Coords';

export default function Player (props){


    const [coords, setCoords] = useState({ x: 0, y: 0 });

const handler = useCallback(
  ({ clientX, clientY}) => {
    setCoords({ x: clientX, y: clientY})
  }, [setCoords]
)

useEventListener('mouseover', handler);

    return(
        <div className='player-container'>
             <h1>coordinates: ({coords.x},{coords.y})</h1>
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