import React from  'react';
 
    const Result = props => {
    const { firstname,lastname, email, password ,confirmpassword} =props.data;
        return (
        <div>
          <p> {this.firstname} </p>  
          <p> { lastname} </p>
          <p> { email} </p>
          <p> { password} </p>
          <p> { confirmpassword} </p>
        </div>
    );
        };


export default Result;
           