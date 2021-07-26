import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react'

const People = (props) => {
    const [person, setPerson] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
             .then( response => setPerson(response.data) )

             
       
    }, [props.id]);
    
    return (
        <div>
            <h4> Luke Skywalker  </h4>
            <ul> 
                <p> Hight:{person.name} </p>
                <p> Mass:{person.mass} </p>
                <p> Hair Color:{person.hair}</p>
                <p> Skin Color: {person.color} </p>
            </ul>
        </div>
    )
 
}


export default People;
