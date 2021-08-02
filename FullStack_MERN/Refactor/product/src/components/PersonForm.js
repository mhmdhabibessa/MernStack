import React, { useState } from 'react'
    

const  PersonForm = (props) => {

    const { initialTitle, initialPrice,initialDesc, onSubmitProp } = props;

    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice); 
    const [desc, setDesc] = useState(initialDesc); 
  

 
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title,price,desc});

    }
  
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title : </label><br/>
                <input type="text"  name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="text"  name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>

            <p>
                <label>Descriptions:</label><br/>
                <input type="text" name="desc"  onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit"/>
        </form> 
    
      
        </>
    )
}
 export default PersonForm;
