import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import PersonForm from '../components/PersonForm';
 const Update =(props)  => {
   
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data)
                setLoaded(true);
            })
    }, [person])


    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res));
    
            navigate('/people/'+props.id)
    }

    return (
        <div>
           { loaded && (
            <PersonForm  onSubmitProp={updatePerson}
            initialTitle ={person.title}
            initialPrice ={person.price}
            initialDes = {person.desc}
            
            />
           )}
        </div>
    )
}

export  default Update ;