import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import DeleteButton from './DeleteButton'
const Details = (props) => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
   
    const [people, setPeople] = useState([]);

  

    const removeFromDom = personId => {
      setPeople(people.filter(person => person._id != personId))
    }

    return (
        <div>
            
                
                <p> {person.title}  </p>
                <p> {person.price} </p>
                <p> {person.desc} </p>    
            
                <Link to={"/people/" + person._id + "/edit"}> edit </Link>
            
                <DeleteButton personId={ person._id} successCallback={()=>removeFromDom(person._id)} />



          
        </div>
    )
}

export default Details
