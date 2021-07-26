import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Planet = (props) => {
        const [plant, setPlanet] = useState('');

    
        useEffect(() => {
            axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then( response => setPlanet(response.data) )
                 
               
                 
           
        }, [props.id]);
                 
    return (
        <div>
                <h4> Tatooine </h4>
                <p> climate : {plant.climate} </p>
                <p> Terrain : {plant.terrain} </p>
                <p> Surface Water : {plant.surface_water} </p>
                <p> Population : {plant.population} </p>
        </div>
    )
}

export default Planet
