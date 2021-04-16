import { React } from 'react';

const Filter = ( { filters, countries, filterCats } ) => {

    const filterStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    }

    const inputStyle = {
        maxWidth: '20%',
        borderRadius: '10px',
        padding: '10px',
        border: '1px solid #665656',
        outline: 'none',
    }

    const countryFilter = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '5px',
    };

    const buttonStyle = {
        backgroundColor: 'white',
        fontSize: '20px',
        borderRadius: '10px',
        padding: '10px',
        border: '1px solid #665656',
        cursor: 'pointer',
        boxShadow: '0 3px 3px 2px rgb(0 0 0 / 20%)',
        outline: 'none',
    };

    return (
        <div id="catFilters" style={filterStyle}>
            <div>
                <input style={inputStyle} type="text" value={filters.name} onChange={(e) => filterCats({name: e.target.value.toLowerCase()})}></input>
                
            </div>

            <div style={countryFilter}>
                {Object.keys(countries).map(k => {
                    return <button key={k} style={buttonStyle} onClick={() => filterCats({origin: k.toLowerCase() === 'all' ? '' : k.toLowerCase()})}>{k.toUpperCase()} {countries[k]}</button>
                })}
            </div>
        </div>
    )
}

export default Filter;