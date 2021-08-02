import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import ShowPerson from '../components/ShowPerson';
import axios from 'axios';

const Main = () => {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/people')
          .then(res=>{
              setPeople(res.data);
              setLoaded(true);
          });
  },[people])
  const createPerson = person => {
    axios.post('http://localhost:8000/api/people', person)
        .then(res=>{
            setPeople([...people, res.data]);
        })
}
 
    return (
        <div>
           <PersonForm  onSubmitProp={createPerson} initialTitle="" initialPrice="" initialDesc="" /> 
           <hr/>
           {loaded && <ShowPerson people={people}   />}
         
        </div>
    )
} 
export default Main;