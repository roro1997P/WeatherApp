import React, { useState } from 'react';
import { getWeather } from '../hooks/getWeather';
import PropTypes from 'prop-types';

export const Form = ({ search, setSearch, setConsult, setWeather }) => {
    
    const [ error, setError ] = useState(false);
    const [ msgError, setMsgError ] = useState('');

    const { city } = search;

    const handleInputChange = ({ target }) => {
        setSearch({
            ...search,
            [ target.name ]: target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if( city === '') {
            setError( true );
            setMsgError('Enter a correct city and country');
            return;
        }

        const api = await getWeather( city );

        if ( !api ) {
            setError( true );
            setMsgError('City not found');
            return;
        }

        setError( false );
        setWeather( api );
        setSearch({ city: '' });
        setConsult(true);
           
    };

    return (
        <form onSubmit={ handleSubmit }>

            { error ? <p className="red darken-4 error">{ msgError }</p> : null }

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ex. Canada, CA..."
                    value={ city }
                    onChange={ handleInputChange }
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >
                    Search weather
                </button>
            </div>
        </form>
    )
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setConsult: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
};