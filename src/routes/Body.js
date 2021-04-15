import { React } from 'react';
import Card from '../components/Card';

const Body = ( { cats } ) => {

    const cardsStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div id="catCards" style={cardsStyle}>
            {cats.map(c =>
                <Card key={c.id} data={c} />
            )}
        </div>
    )
}

export default Body;