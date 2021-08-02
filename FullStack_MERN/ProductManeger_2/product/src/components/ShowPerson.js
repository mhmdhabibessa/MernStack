import React  from 'react'
import { Link, navigate } from '@reach/router';
const ShowPerson =(props) => {


     

    return (

        <div >   
            <h3> All Products </h3>
              {props.people.map((person,index)=> {
                let link="/people/"+person._id

                  
                    return  <>
                    <br/>
                     <Link to ={link}   key={index} > {person.title}  </Link>
                     {/* <button onClick={()=> navigate(link)}   key={index} > {person.title}  </button> */}

                     </>
            } )  } 
        </div>
    )   

   
    }
export default ShowPerson ; 