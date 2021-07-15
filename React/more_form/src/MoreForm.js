import React, { useState } from  'react';
    
    
const MoreForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    ////////////////////////////////////////////////////
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confpassword, setConfpassword] = useState("");

    

    const handle = (e) => {
        e.preventDefault();
        // const newUser = { firstname,lastname, email, password };
        // console.log("Welcome", newUser);

        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstnameError("field must be at least 2 characters.");
        }
            else{
                setFirstnameError("");

            }
    }
    const handle2 = (e) => {   
        setLastname(e.target.value);
        if(e.target.value.length <5){
            setLastnameError("the field must be at least 5 characters.");
        }
        else {
            setLastnameError("");

        }
        }
    const handle3 = (e) => { 
        setEmail(e.target.value);
        if(e.target.value.length<5) {
            setEmailError("field must be at least 5 characters")
        }
        else {
            setEmailError("")
            
        }
    }

    const handle4 = (e) => { 

        if(e.target.value.length<8 ) {
            setPasswordError("passwords must match and be at least 8 characters")
        }
        else {
            setPasswordError("")
        }
        }
        const handle5 = (e) => { 
            var x= setPassword(e.target.value);
            var y =setConfpassword(e.target.value)
            if(e.target.value.length<8 && x === y ) {
                setPasswordError("<div style={{color:'red'}}> passwords must match and be at least 8 characters.</div> ")
            }
            else {
                setPasswordError("")
            }
            }
        
        
    
    
    
// //     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { username, email, password };
//         console.log("Welcome", newUser);
//         setHasBeenSubmitted( true );

        



       
        
    
   
    // const validitaon =(e)=> {
    //     if(valid) {
    //         return  "the validation is more that"
    //     }
    //     else {
    //             return "the validation is more that"
            
    //     }
    // }
    
   
    
    return (
        <form onSubmit={ MoreForm }>
	         <div>
                <label>FirstName: </label> 
                <input type="text" onChange={handle}  /> 
                <p> {firstnameError} </p>
            
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange= {handle2 } />
               <p style={{color:'red'}}> {lastnameError} </p>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handle3 } />
                {emailError}
            </div>
           

            <div>
                <label>password: </label>
                <input type="text" onChange={ handle4 , handle5} />
                {passwordError}

            </div>
            <div>
                <label>confermPaswword: </label>
                <input type="text" onChange={ handle4 } />

            </div>
           

            <input type="submit" value="MoreForm" />
        </form>
    );
};

    
export default MoreForm;