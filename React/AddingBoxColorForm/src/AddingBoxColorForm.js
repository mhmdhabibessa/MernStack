import React from 'react'
import { useState } from "react";
const AddingBoxColorForm = () => {

    const [color, setColor] = useState();

    const [allcolor,setAllcolor]= useState([]);
   
    const onsetColor =(e) => {
        setColor({
            ...color,
            [e.target.name]: e.target.value
        })


    }

    const handleSubmit = (x) => {
        x.preventDefault();
        setAllcolor([...allcolor,color])
        setColor({
            colorbox:""
        })
        
    }


    
    
    return (
        <>
        <form onSubmit={ handleSubmit }>
            <h1>color : </h1>
            <input 
                
                placeholder="Enter your color Box here"
                onChange={onsetColor}
                name = 'colorbox'
            >
            </input>
            <input type="submit" />
        </form>
        {allcolor.map(
            (fillBox) =>{
                return (
                <div width="150px" style={{ backgroundColor:fillBox.colorbox , height:'150px',width:'150px' }}>  
            
                </div>
                )
        
        } )}
      

        </>
    );
};

    
export default AddingBoxColorForm;
