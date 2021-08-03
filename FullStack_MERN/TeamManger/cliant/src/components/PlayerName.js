import React, { useState } from 'react'
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import Select from 'react-select'
import { Input } from '@material-ui/core';
const  PlayerName = (props) => {
    let linkofstatus = "status/game" 
    const [name, setName] = useState(""); 
    const[positions,setPositions]=useState("")
    const[errsubmit,setErrsubmit] = useState([])
   
    const options = [
        { value: 'Forward', label: 'Forward' },
        { value: 'Midelfeilder', label: 'Midelfeilder' },
        { value: 'GoolKeeper', label: 'GoolKeeper' }
      ]


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', {
            name,positions
        })
            .then(res=>console.log(res))
            .catch(err => {
                const errStr = err.response.data.errors.name.message
                console.log(err.response.data.errors.name.message)
                setErrsubmit(errStr);
            })
            navigate('/player/list')
            
    }
    return (
        <fieldset>
             <Link to="">  Manage Players </Link> ||
            <Link to='status/game/:id' > Manage   Player Status</Link>  
          <Paper elevation={3}>
            <p>Some text here</p>
                </Paper>
                <div className=" links ">
               <Link to="/player/list"> List</Link> 
               </div>
 <fieldset style={{backgroundColor:"white"}}>
        <form onSubmit={onSubmitHandler}>
            
              
               Player Name  :   <Input style={{width:"100%"}} type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <p style={{color:"red"}} > {errsubmit}  </p>

                <br/>

                Perferd Positions :: <Select options={options} onChange={(e)=>setPositions(e.value)} />
                
                <p style={{color:"red"}} > {errsubmit}  </p>
            
        
            <input type="submit"/>
        </form>
</fieldset>

</fieldset>
              

      
        
    )
}
 export default PlayerName;
