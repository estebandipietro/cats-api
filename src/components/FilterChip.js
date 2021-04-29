import { React, useState, useEffect } from 'react';

const FilterChip = ({ countryName, filterCats, numberOfItems, countryFilter }) => {

    const defaultButtonStyle = {
        color: '#000000', 
        backgroundColor: 'white',
        height: '50px',
        fontSize: '20px',
        borderRadius: '10px',
        padding: '10px',
        border: '1px solid #665656',
        cursor: 'pointer',
        boxShadow: '0 3px 3px 2px rgb(0 0 0 / 20%)',
        outline: 'none',
    };

    const [buttonStyle, setButtonStyle] = useState(defaultButtonStyle);

    useEffect(() => {

        if(countryFilter) {
            if(countryFilter !== countryName.toLowerCase()) {
                setButtonStyle(defaultButtonStyle);
            }
        } else {
            if(countryName.toLowerCase() === 'all') {
                setButtonStyle({...defaultButtonStyle, color: '#ffffff', backgroundColor: '#222222'});
            } else {
                setButtonStyle(defaultButtonStyle);
            }
        }

    }, [countryFilter, countryName]);

    const onClick = (event, k) => {
        filterCats({origin: k.toLowerCase() === 'all' ? '' : k.toLowerCase()});

        const newTheme = event.target.style.backgroundColor === 'white' ? {...buttonStyle, color: '#ffffff', backgroundColor: '#222222'} : {...buttonStyle, color: '#000000', backgroundColor: 'white'};
        setButtonStyle({...buttonStyle, ...newTheme});
    }
    
    return (
        <button style={buttonStyle} onClick={(e) => onClick(e,countryName)}>{countryName} {numberOfItems}</button>
    );
} 

export default FilterChip;