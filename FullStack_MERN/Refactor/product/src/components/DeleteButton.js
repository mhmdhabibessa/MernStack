import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const  DeleteButton = ( props ) => {
    const { personId, successCallback } = props;
    const deletePdoucts = e => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res=>{
                successCallback();
            })
            navigate('/')

    }
    return (
        <button onClick={deletePdoucts}>
            Delete
        </button>
    )
}
 export default DeleteButton ; 
