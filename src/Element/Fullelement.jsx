import React, { useEffect, useState } from 'react';
import { Elements } from './Elements';

const Fullelement = ({ reduceCoin }) => {
    const [players, setPlayer] = useState([])
    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayer(data))
            .catch(error => console.log(error))

    })

    return (
        <div>
            <h1 className='font-bold text-2xl  mx-4' >Available player</h1>
            <div className='md:grid grid-cols-3 space-y-4 space-x-2 p-2 mb-20 mx-auto justify-between items-center'>

                {
                    players.map(player => <Elements player={player} reduceCoin={reduceCoin} />)
                }
            </div>
        </div>

    );
};

export { Fullelement };