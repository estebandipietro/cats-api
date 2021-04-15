import { React } from 'react';
import ThemedButton from './../components/ThemedButton';

const Header = ( { changeTheme, length, averageWeight, averageLifeSpan } ) => {

    const average = {
        display: 'inline-block',
        color: '#665656',
        fontSize: '26px',
    };

    const titleStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

    return (
        <div id="catHeader">
            <div style={titleStyle}>
                <h1>Cats Paradise</h1>
                <ThemedButton onClick={changeTheme} />
            </div>
            <p>There are {length} cat breeds</p>
            <small>
                On average a cat can weight about <strong style={average}>{averageWeight}</strong> kg and live <strong style={average}>{averageLifeSpan}</strong> years
            </small>
        </div>
    )
}

export default Header;