import React from 'react'
import { useState } from 'react'
import { navigate } from '@reach/router' 

const Form = () => {
    const [id,setId] = useState();
    const [select,setSelect]=useState('people')
    

    const submithandel =(e) => {
        e.preventDefault();
       
        navigate(`/${select}/${id}`)
    }



    return (
        <div>
            <form onSubmit={submithandel}>
            <label> Search for :  </label>  
            <select  value={select} onChange={(e)=> setSelect(e.target.value)}> 
          
            <option value="planet"> planets </option>
            <option value="people"> people </option>
            </select>
            <label> ID: </label>  
            <input onChange= {(e)=> setId(e.target.value)} type="number"/>

            <input type="submit"/>

            </form>
            
        </div>
    )
}

export default Form;
