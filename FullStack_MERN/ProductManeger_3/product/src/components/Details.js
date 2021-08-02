import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
const Details = (props) => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])

    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                props.removeFromDom(personId)
            })
            .then(navigate('/'))
            .catch(err => console.log(err))
    }
    return (
        <div>
            
                
                <p> {person.title}  </p>
                <p> {person.price} </p>
                <p> {person.desc} </p>    
            
                <Link to={"/people/" + person._id + "/edit"}> edit </Link>
                <button  o onClick={(e)=>{deletePerson(person._id)}}>  Delete </button>
            

          
        </div>
    )
}

export default Details
