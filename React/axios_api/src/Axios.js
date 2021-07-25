import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Axios = props => {
    
    //Note the second argument is an empty array. We are only 
    const [responseData, setResponseData] = useState([]);
const allPekemon = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200.')
            .then(response=>{setResponseData(response.data.results)}) 
};
           
     
    return(
           <div>
            <button onClick={allPekemon}> Fectch Pekemon  </button>
            
                { responseData.map((person, index)=>{
                    return (<div key={index}>{person.name}</div>)
                })}
        </div>
    )
}
export default Axios;