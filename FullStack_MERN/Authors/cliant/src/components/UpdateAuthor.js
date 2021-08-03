import React, { useState } from 'react'
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { Link, navigate } from '@reach/router';
import { useEffect } from 'react';

const  UpdateAuthor = (props) => {
    const { id } = props;
    const [name, setName] = useState(""); 
    const[errsubmit,setErrsubmit] = useState([])
   
    const [authors, setAuthors] = useState();
    

   
  
    const updatAuthor = e => {
        e.preventDefault();
        console.log(id,name);
        axios.put('http://localhost:8000/api/Author/' + id, {
            name: name 
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

            navigate('/')
      }
    return (
        <>
          <Paper elevation={3}>
            <p>Update</p>
                </Paper>
             
        <form onSubmit={updatAuthor}>
         
                <label>Name : </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <p style={{color:"red"}} > {errsubmit}  </p>
        
        
            <input type="submit"/>
        </form>
        <Link to="/">Home  </Link>   
              

      
        </>
    )
}
 export default UpdateAuthor;
