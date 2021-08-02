import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
 const Update =(props)  => {
    const { id } = props;
   
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(""); 
    const [desc, setDesc] = useState(""); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setTitle(res.data.firstName);
                setPrice(res.data.lastName);
                setDesc(res.data.desc);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            title,
            price,
            desc
        })
            .then(res => console.log(res));
            navigate('/people/'+props.id)
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Descroptions</label><br />
                    <input type="text" 
                    name="desc"
                    value={desc} 
                    onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export  default Update ;