import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Table } from '@material-ui/core'
import { Link, navigate } from '@reach/router'


const PlayerStatus = (props) => {
  const { id, name } = props;
  const [players, setPlayers] = useState([])


  
  useEffect(() => {
    axios.get("http://localhost:8000/api/players/")
      .then(res => setPlayers(res.data))
  }, [players])

// const changecolor= (e) => {
    
//     setColorstate("red");
    
// }
 
 


  return (
    <div> 
            <Link style={{fontSize:"28px"}} to=""> Mange Player </Link> || <Link style={{fontSize:"28px"}} to="" > Manage Player Status</Link>
         <fieldset style={{backgroundColor:"white" ,marginTop:"60px"}}>
        <h3> Player Status Game:  {id} </h3>
        <Link style={{fontSize:"22px"}} to="/status/game/1"> Game 1 </Link> || <Link style={{fontSize:"22px"}} to='/status/game/2'> Game 2 </Link> ||<Link style={{fontSize:"22px"}} to='/status/game/3'> Game 3 </Link> 

      <table>
        <tr >
          <th>Team  Name</th>
         
          <th>Actions</th>
          

        </tr>
        {players.map((player, index) => {
          return (<tr>
            <td key={index}>{player.name}</td>
           
            <td><Button  style={{backgroundColor: "white" }}   onClick={(e)=>{ (e.target.style.backgroundColor='red')}} > Playing </Button>
              <Button style={{backgroundColor: 'white' }}   onClick={(e)=>{ (e.target.style.backgroundColor='green')}} > NotPlaying </Button> 
              <Button style={{backgroundColor: 'white' }}  onClick={(e)=>(e.target.style.backgroundColor='yellow')} > Undecide </Button> </td>

          </tr>   
          
          )
        })}


      </table>
        
      </fieldset>


    </div>
  )
}

export default PlayerStatus
