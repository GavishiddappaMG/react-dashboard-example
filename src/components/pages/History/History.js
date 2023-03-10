import React, { Fragment, useState } from 'react';

import Tiles from './../../Shared/Tiles/Tiles';

import './History.scss';
import { FormattedMessage } from 'react-intl';

const History = (props) => {

    const [data, setData] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        }
    ]);
    return (
        <Fragment >
            <main className="history">
                <h1><FormattedMessage id="History" /></h1>
                <Tiles data={data} />
            </main>
        </Fragment>
    );
}

export default History;