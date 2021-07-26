import React from 'react'

const HomeNumber = (props) => {

    if(isNaN(props.id)) 
    return false;
    return (
        <div>
            <h4 style={{textAlign:"center"}}> the Number is {props.id}   </h4>
        </div>
    )
}

export default HomeNumber
