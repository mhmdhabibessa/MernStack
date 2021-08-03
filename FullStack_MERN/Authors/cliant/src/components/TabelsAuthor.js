import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Table } from '@material-ui/core'
import { Link, navigate } from '@reach/router'
const TabelsAuthor = (props) => {
  const { id, name } = props;
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/Author/")
      .then(res => setAuthors(res.data))
  }, [authors])


  const deleteitems = (authorId) => {
    axios.delete('http://localhost:8000/api/Author/delete/' + authorId)

      .then(res => {
        setAuthors(authors.filter(author => author._id !== authorId));

        navigate('/')
      })

      .catch(err => console.log(err))
  }

  const showFormUpdate = (id) => {
    navigate('/update/' + id)
  }



  return (
    <div>
      
      <table>
        <tr>
          <th>Authts</th>
          <th>Actions Avalabiles</th>

        </tr>
        {authors.map((author, index) => {
          return (<tr>
            <td key={index}>{author.name}</td>
            <td><Button key={index + "a"} onClick={(e) => { showFormUpdate(author._id) }} >  Edit  </Button>
              <Button key={index} onClick={(e) => { deleteitems(author._id) }}  >  Delete  </Button>  </td>

          </tr>)
        })}


      </table>
      <Link to="/new">Add  an another  </Link>    



    </div>
  )
}

export default TabelsAuthor
