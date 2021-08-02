import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
const Details = (props) => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <div>
            
                
                <p> {person.title}  </p>
                <p> {person.price} </p>
                <p> {person.desc} </p>    

            

          
        </div>
    )
}

export default Details
