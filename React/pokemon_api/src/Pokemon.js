import React,{useState, useEffect} from 'react'



    
    const Pokemon = (props) => {
        const [people, setPeople] = useState([]);
     
         const alll = () => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200.')
                .then(response => response.json())
                .then(response => setPeople(response.results))
         };
     
        return (
            <div>
                <button  onClick={alll}> Featch Pekemon </button>
                <div>
                { people.map((person, index)=>{
                    return (<div key={index}>{person.name}</div>)
                })}
                </div>
            </div>
        );
    }

export default Pokemon;
    

