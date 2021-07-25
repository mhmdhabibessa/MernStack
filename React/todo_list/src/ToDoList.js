import React, { useState } from 'react';
 
// const fruits = [
//     'banana',
//     'pineapple',
//     'peach',
//     'apple'
// ];
 
export default function ToDoList(props) {

    const [msg, setMsg] = useState("");
    const[allmsg,setAllmsg] = useState([]) 
    const [ischeked, setIscheked] = useState(false);

const  handleSubmit = (e) => {
        e.preventDefault();
        if(msg.length ===0)
        return;
        // if(msg.target.value ===e.target.value)
        // return;
        setAllmsg([...allmsg,msg])
        console.log(allmsg)
        setMsg("")
    }

// const handleRemove =(delIdx) => {
     
//     const newmsg = allmsg.filter((fillBox,id) => {
//         return id !== delIdx ; 
//     })
//         setAllmsg(newmsg);
// }

const handleRemove = (iddx) =>{
    if(ischeked) {
    const newtodo=allmsg.filter((fillBox,id) => {
        return id !== iddx;
    })
    setAllmsg(newtodo);
    }
    else ;
    return;
}

    return (
    <>
        <form onSubmit={(e)=>{
            handleSubmit(e)
            }}>
            <input  type='text'
           onChange={(e)=>  setMsg(e.target.value)

        }
        value={msg}

            /> 
   
           
            <button style ={{ position: 'relative' ,
                        backgroundColor: 'rgb(105, 143, 248)',
                        border: 'none' ,
                        fontSize: '28 px',
                        color: '#FFFFFF' ,
                        padding: '20px' , 
                        width: '200px' , 
                        textAlign: 'center',  
                        transitionduration: '0.4s',
                        textDecoration: 'none' , 
                        overflow: 'hidden',
                        cursor: 'pointer'}} >Add</button> <br/><br/><br/>
            
        </form>

            <label>
               
            {allmsg.map((fillBox,id) =>{
                return (
                    <>
                    <div className="noooooo" key={id}>
                     <p> <input type="checkbox"   checked={ischeked} onChange={e => setIscheked(e.target.checked)} /> {fillBox}</p>  
                    <button   
                    onClick = {()=>{
                        handleRemove(id)
                    }}
                    style={{ position: 'relative' ,
                        backgroundColor: 'blue',
                        border: 'none' ,
                        fontSize: '28 px',
                        color: '#FFFFFF' ,
                        padding: '20px' , 
                        width: '200px' , 
                        textAlign: 'center',  
                        transitionduration: '0.4s',
                        textDecoration: 'none' , 
                        overflow: 'hidden',
                        cursor: 'pointer'}}
                    > Delete </button>
                     </div>
                     
                      </>  
            
                )
        } )}
        
            </label>
            

            
        </>
    );
}