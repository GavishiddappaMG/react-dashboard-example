import React from 'react';
import Tile from './Tile/Tile';

import './Tiles.scss';

const Tiles = ({data}) => {

    return (
        <>
            <div className="tiles">
                {
                    data.map(item => {
                        return <Tile key={item.id} data={item} />
                    })
                }
            </div>
        </>
    );
}

export default Tiles;