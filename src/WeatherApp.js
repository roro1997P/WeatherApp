import React, { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Weather } from './components/Weather';

export const WeatherApp = () => {

    const [ search, setSearch ] = useState({ city: '' });
    const [ weather, setWeather ] = useState({});
    const [ consult, setConsult ] = useState(false);
    
    useEffect(() => {
        
    }, [ weather ])

    return (
        <>
            <Header 
                title="Weather React App"
            />

            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Form 
                                search={ search }
                                setSearch={ setSearch }
                                setConsult={ setConsult }
                                setWeather={ setWeather }
                            />
                        </div>
                        <div className="col m6 s12">
                            { 
                                ( consult )
                                    ? <Weather weather={ weather }/>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
