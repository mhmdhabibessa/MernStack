import React, { useState } from  'react';
    
    
const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password ,confirmpassword};
        console.log("Welcome", newUser);
    };
    
    return(
    <>
        <form onSubmit={ createUser }>
            <div>
                <label>FirstName: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>LastName: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
             <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
           
        </form>
                    <label>FirstName: </label>  {firstname} <br/>
                     <label>LastName: </label> {lastname}<br/>
                     <label>email: </label> {email}<br/>
                    <label>Password: </label> {password}  <br/>
                    <label>Password: </label> {confirmpassword}  <br/>
        </>
    );
};
    
export default HookForm;