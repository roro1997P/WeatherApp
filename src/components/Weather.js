import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Weather = ({ weather }) => {

    const [ img, setImg ] = useState('');

    const imgCode = weather.weather[0].main;

    useEffect(() => {
        setImg( imgCode )
    }, [ imgCode ])
    
    const { name, main } = weather;

    const kelvin = 273.15;

    return (
        <div className={`card-panel white col s12 img ${ img }`}>
            <div className="black-text">
                <h2>The weather of { name } is:</h2>
                <p className="temperatura">
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p >{ img } </p>
                <p>
                    Temperature máx:
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>
                    Temperature min:
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
                </p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    weather: PropTypes.object.isRequired,
};