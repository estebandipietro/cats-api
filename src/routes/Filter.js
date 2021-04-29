import { React } from 'react';
import FilterChip from './../components/FilterChip';

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

    return (
        <div id="catFilters" style={filterStyle}>
            <div>
                <input style={inputStyle} type="text" value={filters.name} onChange={(e) => filterCats({name: e.target.value.toLowerCase()})}></input>
            </div>

            <div style={countryFilter}>
                {Object.keys(countries).map(k => { return <FilterChip key={k} countryName={k.toUpperCase()} filterCats={filterCats} numberOfItems={countries[k]} countryFilter={filters.origin} /> })}
            </div>
        </div>
    )
}

export default Filter;