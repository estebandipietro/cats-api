import { React } from 'react';

const Card = ({ data: { name, origin, temperament, life_span, weight: { metric }, description, image, ...rest } } ) => {

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        border: '2px solid grey',
        boxShadow: '0 3px 3px 2px rgb(0 0 0 / 20%)',
    }

    const bodyStyle = {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
    }

    const catName = {
        fontWeight: '300',
        marginBottom: 0,
        paddingBottom: 0,
        fontSize: '28px',
        fontFamily: "Merriweather",
    }

    const catOrigin = {
        fontWeight: 'bold',
        paddingTop: 0,
        marginTop: 0,
        marginBottom: '5px',
    }

    const catAttributes = {
        fontWeight: '400',
        color: '#616161',
    }

    return (
        <div style={cardStyle}>
            <img alt={name} src={image?.url}></img>
            <div style={bodyStyle}>
                <h1 style={catName}>{name}</h1>
                <span style={catOrigin}>{origin}</span>
                <div>
                    <p><span style={catAttributes}>Temperament:</span> {temperament}</p>
                    <p><span style={catAttributes}>Life Span:</span> {life_span} years</p>
                    <p><span style={catAttributes}>Weight:</span> {metric} kg</p>
                    <p><span style={catAttributes}>Description:</span> {description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;