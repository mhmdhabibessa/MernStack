import React, { useState } from 'react'
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { navigate ,Link} from '@reach/router';

const  AuthorForm = (props) => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const[errsubmit,setErrsubmit] = useState([])
   
  
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', {
            name,
        })
            .then(res=>console.log(res))
            .catch(err => {
                const errStr = err.response.data.errors.name.message
                console.log(err.response.data.errors.name.message)
                setErrsubmit(errStr);
            })
            navigate('/')
    }
    return (
        <>
          <Paper elevation={3}>
            <p>Some text here</p>
                </Paper>
               

        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name : </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <p style={{color:"red"}} > {errsubmit}  </p>
            </p>
        
            <input type="submit"/>
        </form>


              

      
        </>
    )
}
 export default AuthorForm;
