import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Table } from '@material-ui/core'
import { Link, navigate } from '@reach/router'
const TabelsPlayer = (props) => {
  const { id, name } = props;
  const [players, setPlayers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/players/")
      .then(res => setPlayers(res.data))
  }, [players])


  const deleteitems = (playerId) => {
    axios.delete('http://localhost:8000/api/players/delete/' + playerId)

      .then(res => {
        setPlayers(players.filter(player => player._id !== playerId));

        navigate('/')
      })

      .catch(err => console.log(err))
  }

 



  return (
    <div>
         <Link to="">  Manage Players </Link> ||
            <Link to='/status/game/1' > Manage   Player Status</Link>  
      <table>
        <tr >
          <th>Team  Name</th>
          <th>Perferd positions</th>
          <th>Actions</th>
          

        </tr>
        {players.map((player, index) => {
          return (<tr>
            <td key={player}>{player.name}</td>
            <td> {player.positions} </td>
            <td><Button key={index} style={{backgroundColor:"#900000" , color:"white" }} onClick={(e) => { deleteitems(player._id) }}  >  Delete  </Button>  </td>

          </tr>   
          
          )
        })}


      </table>
        



    </div>
  )
}

export default TabelsPlayer
