import React from 'react'

const HomeWithstyle = (props) => {
    return (
        <div>
            <h4 style={ {backgroundColor:props.backgraund,color:props.color,textAlign:"center",height:"80px" }}> The Word is : {props.word} </h4>
        </div>
    )
}

export default HomeWithstyle
