import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const getAverageWeight = (cats) => {

    const totalWeight = cats.reduce((counter, cat) => {
        const weight = cat.weight.metric.replace(/\s/g, '').split('-');
        const weightAverage = (Number(weight[0]) + Number(weight[1]))/2;

        return counter + weightAverage;
    }, 0);

    return (totalWeight / cats.length).toFixed(2);
}

const getAverageLifeSpan = (cats) => {

    const totalLifeSpan = cats.reduce((counter, cat) => {
        const lifeSpan = cat.life_span.replace(/\s/g, '').split('-');
        const lifeSpanAverage = (Number(lifeSpan[0]) + Number(lifeSpan[1]))/2;

        return counter + lifeSpanAverage;
    }, 0);

    return (totalLifeSpan / cats.length).toFixed(2);
}

const getCountries = (cats) => {

    return cats.reduce((counter, cat) => {
        if (counter[cat.origin]) {
            counter[cat.origin]++;
        } else {
            counter[cat.origin] = 1;
        }
        return counter;
    }, {All: undefined});
}

const Main = () => {

    const [cats, setCats] = useState([]);
    const [originalCats, setOriginalCats] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState({});

    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };

    const cardsStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const average = {
        display: 'inline-block',
        color: '#665656',
        fontSize: '26px',
    };

    const filterStyle = {
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

    useEffect(() => {
        const url = 'https://api.thecatapi.com/v1/breeds';
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                console.log(response);
                setCats(response.data);
                setOriginalCats(response.data);
                setCountries(getCountries(response.data));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            });
    }, []);

    if (loading) {
        return <div>Esta cargando bro</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    function filterCats(country) {
        if (country === 'All') {
            setCats(originalCats);
        } else {
            const filteredCats = originalCats.filter(cat => cat.origin === country);
            setCats(filteredCats);
        }
    }

    return (
        <div style={mainStyle}>
            <div id="catHeader">
                <h1>Cats Paradise</h1>
                <p>There are {originalCats.length} cat breeds</p>
                <small>
                    On average a cat can weight about <strong style={average}>{getAverageWeight(originalCats)}</strong> kg and live <strong style={average}>{getAverageLifeSpan(originalCats)}</strong> years
                </small>
            </div>
            <div id="catFilters" style={filterStyle}>
                {Object.keys(countries).map(k => {
                    return <button key={k} style={buttonStyle} onClick={() => filterCats(k)}>{k.toUpperCase()} {countries[k]}</button>
                })}
            </div>
            <div id="catCards" style={cardsStyle}>
                {cats.map(c =>
                    <Card key={c.id} data={c} />
                )}
            </div>
        </div>
    )
}

export default Main;