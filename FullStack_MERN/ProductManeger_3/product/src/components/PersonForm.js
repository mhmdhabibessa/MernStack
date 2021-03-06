import React, { useState } from 'react'
import axios from 'axios';
        import { Paper } from '@material-ui/core';


const  PersonForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(""); 
    const [desc, setDesc] = useState(""); 
  

    //handler when the form is submitted
    const onSubmitHandler = e => {
        
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {

            title,
            price,
            desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title : </label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>

            <p>
                <label>Descriptions:</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit"/>
        </form>

...
                <Paper elevation={3}>
            <p>Some text here</p>
                </Paper>

      
        </>
    )
}
 export default PersonForm;
