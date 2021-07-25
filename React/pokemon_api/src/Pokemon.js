import React,{useState, useEffect} from 'react'



    
    const Pokemon = (props) => {
        const [people, setPeople] = useState([]);
     
        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200.')
                .then(response => response.json())
                .then(response => setPeople(response.results))
        }, []);
     
        return (
            <div>
                <h1 > Featch Pekemon </h1>
                { people.map((person, index)=>{
                    return (<div key={index}>{person.name}</div>)
                })}
            </div>
        );
    }

export default Pokemon;
    

