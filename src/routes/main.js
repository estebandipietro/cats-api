import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Filter from './Filter';
import {getCountries, getAverageWeight, getAverageLifeSpan} from '../utils/utils';
import Body from './Body';
import { themes, ThemeContext } from '../theme-context';

const Main = () => {

    const [cats, setCats] = useState([]);
    const [originalCats, setOriginalCats] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState({});
    const [theme, setTheme] = useState(themes.light);

    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
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

    const filterCats = (country) => {
        if (country === 'All') {
            setCats(originalCats);
        } else {
            const filteredCats = originalCats.filter(cat => cat.origin === country);
            setCats(filteredCats);
        }
    }

    const toggleTheme = () => {
        setTheme(themes.light === theme ? themes.dark : themes.light);
    }

    return (
        <div style={mainStyle}>
            <ThemeContext.Provider value={theme}>
                <Header changeTheme={toggleTheme} length={originalCats.length} averageWeight={getAverageWeight(originalCats)} averageLifeSpan={getAverageLifeSpan(originalCats)}/>
            </ThemeContext.Provider>

            <Filter countries={countries} handleClick={filterCats} />

            <Body cats={cats} />
        </div>
    )
}

export default Main;